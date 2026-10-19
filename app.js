/* WeedScout Project Hub v1.2 — no frameworks or credentials required. */
(()=>{
'use strict';
const LESSONS=window.WEEDSCOUT_LESSONS||[];
const PHASES=[
  {name:'Learn to see',dates:'Oct–Dec 2026',description:'Python, camera experiments, blue markers and measurable targeting.'},
  {name:'Make it move',dates:'Jan–Feb 2027',description:'Supervised rover assembly, remote driving and camera alignment.'},
  {name:'Make it intelligent',dates:'Mar–Apr 2027',description:'Real plant photographs, honest AI evaluation and cautious targeting.'},
  {name:'Build the tool',dates:'Mar–Jun 2027',description:'Manual removal concepts first; guarded powered tools only after safety review.'},
  {name:'Test & present',dates:'May–Nov 2027',description:'Real lawn trials, comparisons, lessons learned and student-written portfolio.'}
];
const PORTFOLIO=[
 'A short description of the actual lawn problem, written in my own words',
 'A credited list of borrowed ideas, kits, libraries and meaningful AI assistance',
 'Photographs of at least three build iterations (including a failure)',
 'A 2–3 minute demo showing current actual capabilities',
 'A baseline vs cautious-targeting test with real counts and conditions',
 'Code I can explain line by line',
 'A one-page summary with limitations and next steps I wrote myself',
 'Privacy check: no home addresses, account tokens or identifiable images'
];
const DEFAULT_PARTS=[
 {id:'seed-paper',name:'Paper targets + turf mat',category:'Indoor test course',status:'planned',cost:'',notes:'Use green cardboard until a mat is needed'},
 {id:'seed-camera',name:'Existing phone or webcam',category:'Imaging',status:'planned',cost:'',notes:'Prefer existing equipment'},
 {id:'seed-rover',name:'Beginner rover kit (TBD)',category:'Mobile platform',status:'planned',cost:'',notes:'Only buy after vision checkpoint + grass feasibility review'},
 {id:'seed-plants',name:'Indoor growing supplies',category:'Plant samples',status:'planned',cost:'',notes:'Controlled potted specimens; never release dandelions outdoors'},
 {id:'seed-tool',name:'Guarded actuator prototype (optional)',category:'Removal study',status:'planned',cost:'',notes:'Safety-gated stretch goal'}
];
const KEY='weedscout_dashboard_v1_2';
const blank=()=>({schema:1,sessions:{},journal:[],experiments:[],parts:structuredClone(DEFAULT_PARTS),portfolio:{},updatedAt:new Date().toISOString()});
const app=document.getElementById('app');
const modal=document.getElementById('modalBackdrop');
const toastEl=document.getElementById('toast');
let view='overview', filter='all', search='', modalSession=null, modalStep=0, toastTimer;
function load(){try{let p=JSON.parse(localStorage.getItem(KEY));if(p&&p.schema===1&&p.sessions&&Array.isArray(p.journal)&&Array.isArray(p.experiments)&&Array.isArray(p.parts))return p}catch(e){console.warn('Could not load saved project',e)}return blank()}
let state=load();
function save(){state.updatedAt=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(state));document.getElementById('storagePill').textContent='● Saved on this device'}catch(e){document.getElementById('storagePill').textContent='● Save failed — export backup';toast('Your browser could not save. Export a backup now.')};window.dispatchEvent(new CustomEvent('weedscout:change',{detail:{state:structuredClone(state)}}))}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=s=>Number.isFinite(Number(s))?Number(s):0;
const date=s=>s?new Date(s).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}):'—';
const fmt=n=>Number(n).toLocaleString(undefined,{maximumFractionDigits:1});
function toast(message){clearTimeout(toastTimer);toastEl.textContent=message;toastEl.classList.add('show');toastTimer=setTimeout(()=>toastEl.classList.remove('show'),3200)}
function sessionState(id){return state.sessions[id]||{checked:[],done:false,evidence:'',notes:'',minutes:0};}
function completedCount(){return LESSONS.filter(l=>sessionState(l.id).done).length}
function nextLesson(){return LESSONS.find(l=>!sessionState(l.id).done)||LESSONS.at(-1)}
function phaseCount(p){let ar=LESSONS.filter(l=>l.phase===p);return{total:ar.length,done:ar.filter(l=>sessionState(l.id).done).length}}
function minutes(){return Object.values(state.sessions).reduce((n,x)=>n+num(x.minutes),0)+state.journal.filter(x=>!x.session).reduce((n,x)=>n+num(x.minutes),0)}
function evidenceCount(){let files=[...Object.values(state.sessions).map(x=>x.evidence),...state.journal.map(x=>x.evidence)].filter(x=>String(x||'').trim());return files.length}
function status(id){let st=sessionState(id);return st.done?'done':(st.checked||[]).some(Boolean)||st.evidence||st.notes?'working':'not started'}
function badge(kind){return `<span class="tag ${kind==='done'?'done':kind==='working'?'working':''}">${kind==='done'?'Complete':kind==='working'?'In progress':'Not started'}</span>`}
function goto(target){view=target;document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x.dataset.view===view));document.getElementById('currentViewName').textContent=({overview:'MISSION CONTROL',sessions:'BUILD SESSIONS',journal:'LAB NOTEBOOK',experiments:'EXPERIMENTS',inventory:'PARTS & BUDGET',portfolio:'PORTFOLIO',settings:'BACKUPS & SYNC'})[view]||view;render();window.scrollTo({top:0,behavior:'smooth'})}
function header(eyebrow,title,subtitle,action=''){return `<div class="title-row"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="sub">${subtitle}</p></div>${action}</div>`}
function progress(){return Math.round(completedCount()/LESSONS.length*100)}
function renderOverview(){const next=nextLesson(),p=progress(),n=completedCount();return `${header('STUDENT ENGINEERING / OCT 2026–FALL 2027','Your next lesson','Start with the next small step. Your work saves as you go.')}
<div class="hero"><div class="hero-content"><div class="eyebrow">UP NEXT</div><h2>Session ${String(next.id).padStart(2,'0')}: ${esc(next.title)}</h2><p>${esc(next.win)}. We'll show one step at a time, with an example and help if you get stuck.</p><button class="btn primary" data-action="open-lesson" data-id="${next.id}">${n===60?'Review final session':'Start this lesson'} ↗</button></div><div class="hero-arc"><div class="progress-ring" style="--pct:${p}%"><div class="progress-inner"><strong>${p}%</strong><span>completed</span></div></div></div></div>
<div class="metric-grid"><div class="metric-card"><span class="kicker">COMPLETED SESSIONS</span><span class="metric-icon">✓</span><div class="metric-num">${n}<span style="font-size:15px;color:#a1afac"> / 60</span></div><div class="label">Small wins earned</div></div>
<div class="metric-card"><span class="kicker">TIME INVESTED</span><span class="metric-icon">◷</span><div class="metric-num">${fmt(minutes()/60)}<span style="font-size:15px;color:#a1afac"> hrs</span></div><div class="label">Student-entered minutes only</div></div>
<div class="metric-card"><span class="kicker">LAB EXPERIMENTS</span><span class="metric-icon">⌁</span><div class="metric-num">${state.experiments.length}</div><div class="label">Recorded test runs</div></div>
<div class="metric-card"><span class="kicker">EVIDENCE REFERENCES</span><span class="metric-icon">◇</span><div class="metric-num">${evidenceCount()}</div><div class="label">Named photos / code / videos</div></div></div>
<div class="two-column"><div><div class="section-header"><h3>Roadmap progress</h3><button class="btn small outline" data-view="sessions">Browse sessions ↗</button></div><div class="panel">${PHASES.map((ph,i)=>{let c=phaseCount(i),q=Math.round(c.done/c.total*100);return `<div class="phase-item"><div class="phase-top"><strong><span style="color:#699783;margin-right:10px">0${i+1}</span> ${esc(ph.name)}</strong><span>${c.done}/${c.total} · ${q}%</span></div><div class="bar"><div class="bar-inner" style="width:${q}%"></div></div></div>`}).join('')}</div></div>
<div><div class="section-header"><h3>What we're building toward</h3></div><div class="panel"><div class="mission-card"><strong>Not another weed detector</strong><p>Research whether requiring a second confirmation reduces incorrect weed targeting compared with a single-frame baseline.</p></div><div class="mission-card"><strong>Winter = controlled test season</strong><p>Start with paper targets and potted plants. Outdoor lawn trials wait for spring and appropriate safety reviews.</p></div><div class="section-header"><h3>Latest notebook entry</h3><button class="btn small outline" data-view="journal">Open notebook ↗</button></div>${state.journal.length?`<div class="detail"><strong>${esc(state.journal[0].title)}</strong><p>${esc(state.journal[0].result)} · ${date(state.journal[0].created)}</p></div>`:'<p class="empty">No entries yet. After each session, save one observation and one next step.</p>'}</div></div></div>`}
function renderSessions(){let arr=LESSONS.filter(l=>(filter==='all'||(filter==='incomplete'&&!sessionState(l.id).done)||filter==='done'&&sessionState(l.id).done||filter.startsWith('phase')&&l.phase===Number(filter.slice(5)))&&(`${l.title} ${l.win} ${l.id}`.toLowerCase().includes(search.toLowerCase())));return `${header('THE BUILD CURRICULUM','60 lessons, one step at a time','Start with lesson 1. Each lesson walks you through one small task at a time.')}
<div class="session-toolbar"><input id="sessionSearch" class="search" placeholder="Search lessons or session number…" value="${esc(search)}" aria-label="Search sessions"><div class="tabs">${[['all','All'],['incomplete','To do'],['done','Completed'],...PHASES.map((p,i)=>['phase'+i,'Phase '+(i+1)])].map(([id,t])=>`<button class="chip ${filter===id?'selected':''}" data-filter="${id}">${t}</button>`).join('')}</div></div>
<div class="section-header"><h3>${arr.length} lessons</h3><span class="hint">Pick a lesson to start</span></div><div class="session-list">${arr.map(l=>`<article role="button" tabindex="0" class="session-card" data-action="open-lesson" data-id="${l.id}"><div class="session-num">${String(l.id).padStart(2,'0')}</div><div><div class="session-meta">PHASE ${l.phase+1} · ${esc(l.time||'25–40 min')}</div><h4>${esc(l.title)}</h4><p>${esc(l.win)}</p><div class="bottom">${badge(status(l.id))}</div></div></article>`).join('')||'<p class="empty">No sessions match this search.</p>'}</div>`}
function renderJournal(){return `${header('DOCUMENT THE BUILD','Engineering notebook','Keep short notes about what worked, what was hard, and what to try next.')}
<div class="two-column"><div><div class="panel"><h3>New notebook entry</h3><form id="journalForm" class="form-grid"><div class="field"><label>Title</label><input name="title" placeholder="Camera found blue target" required maxlength="120"></div><div class="field"><label>Related session</label><select name="session"><option value="">General note</option>${LESSONS.map(l=>`<option value="${l.id}">${String(l.id).padStart(2,'0')} · ${esc(l.title)}</option>`).join('')}</select></div><div class="field full"><label>What actually happened?</label><textarea name="result" required maxlength="1800" placeholder="I ran the program and it found the target in 8 of 10 photos…"></textarea></div><div class="field full"><label>What should I do next?</label><input name="next" maxlength="300" placeholder="Test under lower light before moving on"></div><div class="field"><label>Time spent (minutes)</label><input name="minutes" type="number" min="0" max="480" value="25"></div><div class="field full"><button class="btn" type="submit">Save notebook entry ↗</button></div></form></div></div>
<div><div class="panel"><h3>Recent notes</h3>${state.journal.length?`<div class="item-list">${state.journal.map(x=>`<div class="record"><div><strong>${esc(x.title)}</strong><small>${date(x.created)} · ${num(x.minutes)} min ${x.session?'· Session '+x.session:''}<br>${esc(x.result)}${x.next?'<br>Next: '+esc(x.next):''}${x.evidence?'<br>Evidence: '+esc(x.evidence):''}</small></div><button class="btn small outline" data-action="delete-journal" data-id="${esc(x.id)}" aria-label="Delete note">✕</button></div>`).join('')}</div>`:'<p class="empty">Your notebook is empty. Failed experiments belong here too—don’t delete the evidence.</p>'}</div></div></div>`}
function compareStats(kind){let arr=state.experiments.filter(x=>x.condition===kind),sum=key=>arr.reduce((n,x)=>n+num(x[key]),0),total=sum('attempts'),wrong=sum('incorrect'),skips=sum('skipped');return {runs:arr.length,total,wrong,skips,rate:total?100*wrong/total:null,skiprate:total?100*skips/total:null,err:arr.length?arr.reduce((n,x)=>n+num(x.errorMm),0)/arr.length:null}}
function renderExperiments(){let b=compareStats('baseline'),c=compareStats('cautious');let fmtP=x=>x==null?'No data':fmt(x)+'%';let bar=x=>x==null?0:Math.min(100,x);return `${header('MEASURE — DON’T GUESS','Experiments & results','Enter actual trials. No prefilled success rates; the dashboard calculates comparisons from real data.')}
<div class="panel"><h3>Baseline vs cautious targeting</h3><div class="compare">${[['baseline','Single-frame baseline',b],['cautious','Two-stage cautious rule',c]].map(([id,t,x])=>`<div class="compare-item"><strong>${t}</strong><div class="big">${fmtP(x.rate)}</div><small>Incorrect activations / all presented target opportunities</small><div class="bar"><div class="bar-inner" style="width:${bar(x.rate)}%;background:${id==='baseline'?'#dbaf66':'#489977'}"></div></div><div class="tiny">${x.wrong} incorrect / ${x.total} opportunities · ${x.runs} run(s)</div><div class="spacer-sm"></div><div class="tiny">Skipped: ${fmtP(x.skiprate)} · Mean of run-level position errors: ${x.err==null?'—':fmt(x.err)+' mm'}</div></div>`).join('')}</div><p class="text-note">Use comparable test opportunities in both conditions. “Incorrect” means the simulated or real tool would activate at an unapproved target. For trustworthy results, record failures, lighting, and sample-selection methods in the notebook. Run-level means are not weighted by target count.</p></div>
<div class="two-column"><div><div class="panel"><h3>Record a test run</h3><form id="experimentForm" class="form-grid"><div class="field"><label>Method</label><select name="condition" required><option value="baseline">Baseline — single frame</option><option value="cautious">Cautious — verified target</option></select></div><div class="field"><label>Test description</label><input name="title" placeholder="Indoor targets, even light" required maxlength="150"></div><div class="field"><label>Target opportunities tested</label><input type="number" name="attempts" min="1" max="100000" placeholder="10" required></div><div class="field"><label>Incorrect target activations</label><input type="number" name="incorrect" min="0" max="100000" value="0" required></div><div class="field"><label>Targets skipped (not acted on)</label><input type="number" name="skipped" min="0" max="100000" value="0" required></div><div class="field"><label>Mean positioning error (mm)</label><input type="number" step="0.01" name="errorMm" min="0" max="10000" placeholder="Optional"></div><div class="field full"><label>Test conditions / notes</label><textarea name="notes" maxlength="1200" placeholder="Camera height, light, real plants vs paper targets, conditions…"></textarea></div><div class="field full"><button class="btn" type="submit">Add measured test run ↗</button></div></form></div></div>
<div><div class="panel"><h3>Recorded runs</h3>${state.experiments.length?`<div class="item-list">${state.experiments.map(x=>`<div class="record"><div><strong>${esc(x.title)}</strong><small>${date(x.created)} · ${x.condition==='cautious'?'Cautious':'Baseline'}<br>${x.attempts} opportunities · ${x.incorrect} incorrect · ${x.skipped} skipped${x.notes?'<br>'+esc(x.notes):''}</small></div><button class="btn small outline" data-action="delete-experiment" data-id="${esc(x.id)}" aria-label="Delete run">✕</button></div>`).join('')}</div>`:'<p class="empty">No test runs entered. Start with a paper-target comparison. Record raw measurements separately in the included CSV files.</p>'}</div></div></div>`}
function renderInventory(){let spent=state.parts.reduce((n,x)=>n+((x.status==='purchased'||x.status==='tested')?num(x.cost):0),0);return `${header('BUILD ONLY WHAT YOU NEED','Parts & budget','Plan purchases by stage. Prices are only counted when you record an actual purchase.')}
<div class="metric-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))"><div class="metric-card"><div class="kicker">ACTUAL RECORDED SPEND</div><div class="metric-num">$${fmt(spent)}</div><div class="label">Not a price estimate</div></div><div class="metric-card"><div class="kicker">PARTS TRACKED</div><div class="metric-num">${state.parts.length}</div><div class="label">Planned / purchased / tested</div></div></div>
<div class="two-column"><div><div class="panel"><h3>Equipment list</h3><div class="item-list">${state.parts.map(x=>`<div class="record"><div><strong>${esc(x.name)}</strong><small>${esc(x.category)} · ${esc(x.status)} ${x.cost!==''?'· $'+esc(x.cost):''}<br>${esc(x.notes)}</small></div><div class="inline-buttons"><select aria-label="Status for ${esc(x.name)}" data-part-status="${esc(x.id)}"><option value="planned" ${x.status==='planned'?'selected':''}>Planned</option><option value="purchased" ${x.status==='purchased'?'selected':''}>Purchased</option><option value="tested" ${x.status==='tested'?'selected':''}>Tested</option></select><button class="btn small outline" data-action="edit-part" data-id="${esc(x.id)}">Edit</button><button class="btn small outline" data-action="delete-part" data-id="${esc(x.id)}">✕</button></div></div>`).join('')}</div></div></div><div><div class="panel"><h3>Add a part</h3><form id="partForm" class="form-grid"><div class="field full"><label>Part / equipment</label><input name="name" required maxlength="120" placeholder="USB camera mount"></div><div class="field"><label>Category</label><input name="category" maxlength="80" value="General"></div><div class="field"><label>Actual price paid ($)</label><input type="number" name="cost" min="0" max="100000" step="0.01" placeholder="Leave blank if not purchased"></div><div class="field full"><label>Status</label><select name="status"><option value="planned">Planned</option><option value="purchased">Purchased</option><option value="tested">Tested</option></select></div><div class="field full"><label>Why / where used</label><textarea name="notes" maxlength="400"></textarea></div><div class="field full"><button class="btn" type="submit">Add to equipment list</button></div></form></div></div></div>`}
function renderPortfolio(){let n=PORTFOLIO.filter((_,i)=>state.portfolio[i]).length;return `${header('TURN THE BUILD INTO A STORY','College engineering portfolio','Show what YOU made, what failed, what the data says, and what still needs work.')}
<div class="hero" style="min-height:auto;grid-template-columns:1fr auto"><div class="hero-content"><div class="eyebrow">FALL 2027 / APPLICATION READINESS</div><h2>${n} of ${PORTFOLIO.length} portfolio elements ready</h2><p>Progress here is your own checklist—not a claim that a school has reviewed or endorsed the project.</p></div><div class="hero-arc"><div class="progress-ring" style="--pct:${Math.round(n/PORTFOLIO.length*100)}%"><div class="progress-inner"><strong>${Math.round(n/PORTFOLIO.length*100)}%</strong><span>ready</span></div></div></div></div>
<div class="two-column"><div><div class="panel"><h3>Deliverable checklist</h3>${PORTFOLIO.map((t,i)=>`<label class="check-row"><input type="checkbox" data-portfolio="${i}" ${state.portfolio[i]?'checked':''}><span>${esc(t)}</span></label>`).join('')}</div></div><div><div class="panel"><h3>What stands out</h3><div class="detail"><strong>1. He can explain the problem.</strong><p>What specific damage or false-target problem is the robot trying to reduce?</p></div><div class="detail"><strong>2. He can defend the experiment.</strong><p>How were baseline and cautious modes compared? Were test photos truly held out?</p></div><div class="detail"><strong>3. He can show honest iteration.</strong><p>One failure, one change he personally made, and quantitative evidence that the design changed.</p></div><div class="detail"><strong>4. He credits help appropriately.</strong><p>Document educational kits, external code, mentors and AI assistance. Never fabricate outcomes.</p></div></div></div></div>`}
function renderSettings(){return `${header('YOUR WORK','Backups & cloud sync','The website can be published publicly without publishing your private progress data.')}
<div class="two-column"><div><div class="panel"><h3>Backup and restore</h3><p class="text-note">This browser saves data locally by default. Export your progress weekly so a device reset never erases the work.</p><div class="inline-buttons"><button class="btn" data-action="export-json">Download complete JSON backup</button><button class="btn outline" data-action="import-json">Restore JSON backup</button><button class="btn outline" data-action="export-csv">Export notebook + experiments CSV</button></div><hr><p class="text-note">Restoring replaces the data in this browser. Keep a backup before restoring. Photos/videos stay in their original folders; the dashboard stores filenames, not actual media.</p></div><div class="panel"><h3>Cloud status</h3><div id="cloudStatus">${window.WEEDSCOUT_FIREBASE_CONFIG?'Cloud module loading…':'Local-only mode is active. Sync requires an optional Firebase setup.'}</div><div class="spacer-sm"></div><div class="inline-buttons"><button class="btn outline" data-action="cloud-login" id="cloudLoginButton">${window.WEEDSCOUT_FIREBASE_CONFIG?'Connect Google account':'How to enable cross-device sync'}</button><button class="btn outline" data-action="cloud-logout" id="cloudLogoutButton" style="display:none">Sign out</button></div><hr><p class="text-note">Never store account passwords, API tokens, home addresses or exact GPS locations in this dashboard.</p></div></div>
<div><div class="panel"><h3>Website hosting</h3><p class="text-note">Upload these web files to a GitHub Pages repository to make the dashboard reachable from a browser on laptop or phone. The link hosts the application, not your personal log entries. For the same progress across devices, enable Google sign-in with Firebase as described in README.md.</p><button class="btn outline small" data-action="hosting-instructions">View setup summary</button></div><div class="panel"><h3>Delete local progress</h3><p class="text-note">Only deletes this browser's saved dashboard records. Does not delete any previously synced cloud data or backup files.</p><button class="btn danger" data-action="reset-local">Reset local dashboard</button></div></div></div>`}
function render(){app.innerHTML=({overview:renderOverview,sessions:renderSessions,journal:renderJournal,experiments:renderExperiments,inventory:renderInventory,portfolio:renderPortfolio,settings:renderSettings})[view]();if(view==='settings')window.dispatchEvent(new Event('weedscout:settings'))}
function showLesson(id){const l=LESSONS.find(l=>l.id===id);if(!l)return;modalSession=id;const checked=sessionState(id).checked||[];modalStep=Math.max(0,l.steps.findIndex((_,i)=>!checked[i]));modal.hidden=false;renderModal();document.body.style.overflow='hidden'}
function closeLesson(){modalSession=null;modal.hidden=true;document.body.style.overflow='';render()}
function renderModal(){
 const l=LESSONS.find(x=>x.id===modalSession),st=sessionState(l.id);
 const checks=Array.from({length:l.steps.length},(_,i)=>Boolean(st.checked?.[i]));
 const count=checks.filter(Boolean).length,allDone=count===l.steps.length,last=modalStep===l.steps.length-1;
 const tick=String.fromCharCode(96);
 const safeText=esc(l.steps[modalStep]).split(tick).map((v,i)=>i%2?'<code>'+v+'</code>':v).join('');
 const stepsNav=l.steps.map((_,i)=>'<button type="button" data-action="jump-step" data-id="'+i+'" class="workshop-step-dot '+(i===modalStep?'current ':'')+(checks[i]?'finished':'')+'" aria-label="Go to step '+(i+1)+(checks[i]?', finished':'')+'" title="Step '+(i+1)+'">'+(checks[i]?'✓':i+1)+'</button>').join('');
 document.getElementById('lessonModal').innerHTML=`
 <div class="workshop-header">
  <button class="workshop-close" data-action="close-lesson" aria-label="Close workshop">×</button>
  <div class="workshop-kicker">WEEDSCOUT WORKSHOP <span> / LESSON ${String(l.id).padStart(2,'0')} OF 60</span></div>
  <h2>${esc(l.title)}</h2>
  <p class="workshop-goal"><strong>What you’ll make or learn:</strong> ${esc(l.win)}</p>
  <div class="workshop-meta"><span>${esc(l.time)}</span><span>${esc(l.getReady)}</span></div>
 </div>
 <div class="workshop-content">
  <div class="workshop-progress"><div class="workshop-progress-label"><strong>${count} of ${l.steps.length} steps finished</strong><span>Work at your own pace</span></div><div class="workshop-track"><i style="width:${100*count/l.steps.length}%"></i></div><div class="workshop-step-nav">${stepsNav}</div></div>
  <div class="workshop-focus">
   <div class="workshop-step-heading"><span>STEP ${modalStep+1} OF ${l.steps.length}</span>${checks[modalStep]?'<span class="workshop-done-state">✓ Done</span>':''}</div>
   <h3>${safeText}</h3>
   ${window.WeedScoutWorkshop?.renderGuide(l,modalStep)||'<p>Try this one task, then check the result before moving on.</p>'}
   <div class="workshop-controls">
     <button class="workshop-back" data-action="previous-step" ${modalStep===0?'disabled':''}>← Back</button>
     <button class="workshop-later" data-action="next-step" ${last?'disabled':''}>View next step</button>
     <button class="workshop-next" data-action="done-step">${checks[modalStep]?'Done — '+(last?'review lesson':'next step'):'I did this ✓'}</button>
   </div>
  </div>
  ${allDone?`<div class="workshop-finish"><strong>All steps checked. Nice work.</strong><p>${esc(l.done)}</p><button class="workshop-next" data-action="finish-lesson">${st.done?'Save completed lesson':'Finish this lesson'}</button></div>`:''}
  <div class="workshop-safety"><strong>Safety reminder:</strong> ${esc(l.safety)}. Stop if your setup isn't safe.</div>
  <details class="workshop-reflection"><summary>Optional: jot down what happened</summary>
   <div class="field"><label for="lessonNotes">One thing you noticed or want to try next</label><textarea id="lessonNotes" maxlength="1200" placeholder="For example: I got an error at first. I checked the filename and it worked.">${esc(st.notes)}</textarea></div>
   <div class="field"><label for="lessonMinutes">Minutes worked (optional)</label><input id="lessonMinutes" type="number" min="0" max="9999" value="${num(st.minutes)}"></div>
   <button class="btn outline" data-action="save-lesson">Save note</button>
  </details>
  ${st.evidence?'<p class="workshop-legacy">Previously saved reference: '+esc(st.evidence)+'</p>':''}
 </div>`;
}
function preserveDraft(){
 if(modalSession===null)return;
 const l=LESSONS.find(x=>x.id===modalSession),notes=document.getElementById('lessonNotes'),minutes=document.getElementById('lessonMinutes');
 if(!notes||!minutes)return;
 const st={...sessionState(l.id)},newNotes=notes.value.trim(),newMinutes=Math.max(0,num(minutes.value));
 if(st.notes===newNotes&&num(st.minutes)===newMinutes)return;
 st.notes=newNotes;st.minutes=newMinutes;state.sessions[l.id]=st;save();
}
function updateLesson(saveAsDone){
 const l=LESSONS.find(x=>x.id===modalSession);
 preserveDraft();
 const st={...sessionState(l.id)};
 if(saveAsDone){
  if(!l.steps.every((_,i)=>st.checked?.[i]))return toast('Check each step before finishing.');
  st.done=true;st.finishedAt=new Date().toISOString();
  state.sessions[l.id]=st;save();closeLesson();
  toast('Lesson '+l.id+' finished. Your progress is saved.');
 }else{toast('Note saved.');renderModal()}
}
function completeStep(){
 if(modalSession===null)return;
 preserveDraft();
 const l=LESSONS.find(x=>x.id===modalSession);
 const st={...sessionState(l.id)},checks=Array.from({length:l.steps.length},(_,i)=>Boolean(st.checked?.[i]));
 checks[modalStep]=true;st.checked=checks;state.sessions[l.id]=st;save();
 if(modalStep<l.steps.length-1)modalStep++;
 renderModal();
}
const uid=()=>typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():'rec-'+Date.now()+'-'+Math.random().toString(36).slice(2);
function download(filename,text,mime){let blob=new Blob([text],{type:mime}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000)}
function csv(rows){return rows.map(row=>row.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\r\n')}
function exportJson(){download('weedscout-progress-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(state,null,2),'application/json');toast('Backup downloaded.')}
function exportCsv(){let journal=csv([['date','session','title','minutes','observation','next_step','evidence'],...state.journal.map(x=>[x.created,x.session,x.title,x.minutes,x.result,x.next,x.evidence])]);let tests=csv([['date','method','test_name','opportunities','incorrect','skipped','mean_error_mm','notes'],...state.experiments.map(x=>[x.created,x.condition,x.title,x.attempts,x.incorrect,x.skipped,x.errorMm,x.notes])]);download('weedscout-lab-notebook.csv',journal,'text/csv;charset=utf-8');setTimeout(()=>download('weedscout-experiments.csv',tests,'text/csv;charset=utf-8'),300);toast('CSV files downloaded.')}
function validateImport(v){return v&&v.schema===1&&typeof v.sessions==='object'&&!Array.isArray(v.sessions)&&Array.isArray(v.journal)&&Array.isArray(v.experiments)&&Array.isArray(v.parts)&&typeof v.portfolio==='object'}
window.WeedScoutApp={getState:()=>structuredClone(state),replaceState:(s)=>{if(!validateImport(s))throw new Error('Invalid WeedScout backup');state=structuredClone(s);save();render();toast('Project data restored.')},toast,cloudStatus:()=>view==='settings'?window.dispatchEvent(new Event('weedscout:settings')):null};
// Event handlers
 document.addEventListener('click',e=>{
  let nav=e.target.closest('[data-view]');if(nav){goto(nav.dataset.view);return}
  let f=e.target.closest('[data-filter]');if(f){filter=f.dataset.filter;render();return}
  let a=e.target.closest('[data-action]');if(!a)return;let type=a.dataset.action,id=a.dataset.id;
  if(type==='open-lesson'){showLesson(Number(id))}
  if(type==='close-lesson')closeLesson();
  if(type==='previous-step'){preserveDraft();modalStep=Math.max(0,modalStep-1);renderModal()}
  if(type==='next-step'){preserveDraft();const l=LESSONS.find(x=>x.id===modalSession);modalStep=Math.min(l.steps.length-1,modalStep+1);renderModal()}
  if(type==='jump-step'){preserveDraft();modalStep=Math.max(0,Math.min(LESSONS.find(x=>x.id===modalSession).steps.length-1,Number(id)));renderModal()}
  if(type==='done-step')completeStep();
  if(type==='save-lesson')updateLesson(false);
  if(type==='finish-lesson')updateLesson(true);
  if(type==='delete-journal'){if(confirm('Delete this notebook entry? Export a backup first if you need it.')){state.journal=state.journal.filter(x=>x.id!==id);save();render()}}
  if(type==='delete-experiment'){if(confirm('Delete this experiment?')){state.experiments=state.experiments.filter(x=>x.id!==id);save();render()}}
  if(type==='edit-part'){let p=state.parts.find(x=>x.id===id);if(p){let v=prompt('Enter actual amount PAID for '+p.name+' in dollars (leave blank if not purchased):',p.cost);if(v!==null){if(v.trim()!==''&&(!Number.isFinite(Number(v))||Number(v)<0))return toast('Enter a nonnegative cost or leave blank.');p.cost=v.trim()===''?'':Number(v);save();render();toast('Price updated.')}}}
  if(type==='delete-part'){if(confirm('Remove this part from the tracker?')){state.parts=state.parts.filter(x=>x.id!==id);save();render()}}
  if(type==='export-json')exportJson();
  if(type==='export-csv')exportCsv();
  if(type==='import-json')document.getElementById('importFile').click();
  if(type==='cloud-login'){if(window.WeedScoutCloud?.login)window.WeedScoutCloud.login();else alert('To sync across devices, follow README.md: create Firebase web app, enable Google sign-in and Firestore rules, then place web-app config into firebase-config.js. The dashboard works without this setup.')}
  if(type==='cloud-logout'){window.WeedScoutCloud?.logout?.()}
  if(type==='hosting-instructions')alert('GitHub Pages deployment:\n1. Make a new public repo called weedscout-dashboard.\n2. Upload contents of WeedScout_Dashboard_Web (index.html at root).\n3. Settings → Pages → Deploy from a branch → main / (root) → Save.\n4. Open https://YOUR-USERNAME.github.io/weedscout-dashboard/.\n5. For cross-device progress, follow Firebase sync instructions in README.md.');
  if(type==='reset-local'){if(confirm('Permanently erase this browser’s dashboard progress? This does not erase cloud data.')){localStorage.removeItem(KEY);state=blank();save();render()}}
 });
 document.addEventListener('change',e=>{
  if(e.target.matches('[data-action="check-step"]')){preserveDraft();let l=LESSONS.find(x=>x.id===modalSession),st={...sessionState(l.id)},checks=[...Array(l.steps.length)].map((_,i)=>Boolean(st.checked?.[i]));checks[modalStep]=e.target.checked;st.checked=checks;state.sessions[l.id]=st;save();renderModal()}
  if(e.target.matches('[data-portfolio]')){state.portfolio[e.target.dataset.portfolio]=e.target.checked;save();render()}
  if(e.target.matches('[data-part-status]')){let part=state.parts.find(x=>x.id===e.target.dataset.partStatus);if(part){part.status=e.target.value;save();render()}}
 });
 document.addEventListener('submit',e=>{
  if(!['journalForm','experimentForm','partForm'].includes(e.target.id))return;e.preventDefault();let data=Object.fromEntries(new FormData(e.target).entries());
  if(e.target.id==='journalForm'){state.journal.unshift({id:uid(),created:new Date().toISOString(),session:data.session?Number(data.session):'',title:String(data.title).trim(),result:String(data.result).trim(),next:String(data.next).trim(),evidence:"",minutes:Math.max(0,num(data.minutes))});toast('Notebook entry saved.')}
  else if(e.target.id==='experimentForm'){let attempts=num(data.attempts),incorrect=num(data.incorrect),skipped=num(data.skipped);if(![attempts,incorrect,skipped].every(Number.isInteger)||attempts<=0||incorrect<0||skipped<0||incorrect+skipped>attempts)return toast('Check counts: wrong activations + skips cannot exceed opportunities.');state.experiments.unshift({id:uid(),created:new Date().toISOString(),condition:data.condition,title:String(data.title).trim(),attempts,incorrect,skipped,errorMm:data.errorMm===''?null:Math.max(0,num(data.errorMm)),notes:String(data.notes).trim()});toast('Test run saved. The comparison is updated.')}
  else if(e.target.id==='partForm'){state.parts.push({id:uid(),name:String(data.name).trim(),category:String(data.category).trim(),status:data.status,cost:data.cost===''?'':Math.max(0,num(data.cost)),notes:String(data.notes).trim()});toast('Part added.')}
  save();render();
 });
 document.addEventListener('input',e=>{if(e.target.id==='sessionSearch'){search=e.target.value;let pos=e.target.selectionStart;render();let el=document.getElementById('sessionSearch');el.focus();el.setSelectionRange(pos,pos)}});
 document.getElementById('importFile').addEventListener('change',async e=>{let file=e.target.files?.[0];if(!file)return;try{let v=JSON.parse(await file.text());if(!validateImport(v))throw Error('Not a WeedScout progress backup');if(!confirm('Replace all local progress with this backup?'))return;window.WeedScoutApp.replaceState(v)}catch(err){alert('Could not restore backup: '+err.message)}finally{e.target.value=''}});
 modal.addEventListener('click',e=>{if(e.target===modal)closeLesson()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeLesson();if((e.key==='Enter'||e.key===' ')&&e.target.matches('.session-card')){e.preventDefault();showLesson(Number(e.target.dataset.id))}});
 render();
})();
