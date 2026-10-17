/* Private per-account Firestore progress sync; each student owns their data. */
const config=window.WEEDSCOUT_FIREBASE_CONFIG;
let auth=null,db=null,currentUser=null,ready=false,cloudError='',setDocFn=null,docFn=null,signInFn=null,logoutFn=null,savingTimer=null;
const base='https://www.gstatic.com/firebasejs/13.0.0/';

/* First-visit sign-in choice. Authenticated returning visitors bypass it. */
let authChecked=false;
let guestMode=false;
try{guestMode=sessionStorage.getItem('weedscout_offline_this_tab')==='1'}catch(e){}
const welcome=document.createElement('div');
welcome.id='weedscoutWelcome';
welcome.className='cloud-welcome-overlay';
welcome.setAttribute('role','dialog');
welcome.setAttribute('aria-modal','true');
welcome.setAttribute('aria-labelledby','cloudWelcomeTitle');
welcome.innerHTML=`<div class="cloud-welcome-card">
 <div class="cloud-welcome-symbol" aria-hidden="true">W</div>
 <div class="cloud-welcome-eyebrow">WEEDSCOUT · ENGINEERING LAB</div>
 <h1 id="cloudWelcomeTitle">Your engineering workspace</h1>
 <p>Sign in to keep your lessons, experiments, and lab notebook synced across devices.</p>
 <div id="cloudWelcomeStatus" class="cloud-welcome-status" role="status" aria-live="polite">Checking saved Google sign-in…</div>
 <button id="cloudWelcomeLogin" type="button" class="cloud-welcome-primary" disabled>Sign in with Google</button>
 <button id="cloudWelcomeOffline" type="button" class="cloud-welcome-secondary">Continue on this device</button>
 <p class="cloud-welcome-fine">Use the same Google account on every device to access the same progress. Offline work stays in this browser.</p>
 </div>`;
document.body.appendChild(welcome);
const welcomeLogin=document.getElementById('cloudWelcomeLogin');
const welcomeOffline=document.getElementById('cloudWelcomeOffline');
const welcomeStatus=document.getElementById('cloudWelcomeStatus');
welcomeLogin.addEventListener('click',()=>window.WeedScoutCloud.login());
welcomeOffline.addEventListener('click',()=>{guestMode=true;try{sessionStorage.setItem('weedscout_offline_this_tab','1')}catch(e){}renderWelcome()});
function renderWelcome(){
 if(!config||guestMode||(currentUser&&ready)){welcome.hidden=true;return}
 welcome.hidden=false;
 if(cloudError)welcomeStatus.textContent='Cloud connection needs attention: '+cloudError;
 else if(!authChecked)welcomeStatus.textContent='Checking for a saved Google sign-in…';
 else if(currentUser)welcomeStatus.textContent='Loading your private project data…';
 else welcomeStatus.textContent='Sign in to access your private cloud progress.';
 welcomeLogin.disabled=!authChecked||!signInFn||!!currentUser;
}
const sameProgress=(a,b)=>{
 const strip=s=>{const copy={...s};delete copy.updatedAt;return copy};
 return JSON.stringify(strip(a))===JSON.stringify(strip(b));
};

const refresh=()=>{
 renderWelcome();
 const slot=document.getElementById('cloudStatus');if(!slot)return;
 const signIn=document.getElementById('cloudLoginButton'),signOut=document.getElementById('cloudLogoutButton');
 if(!config){slot.textContent='Local-only mode: progress is saved in this browser. See README.md to set up private cross-device sync.';signIn.textContent='How to enable cross-device sync';signOut.style.display='none';return}
 if(cloudError){slot.textContent='Cloud unavailable: '+cloudError;signIn.textContent='Cloud setup help';signOut.style.display='none';return}
 if(!auth){slot.textContent='Preparing optional cloud sign-in…';return}
 if(!currentUser){slot.textContent='Not connected. Local progress is still being saved.';signIn.textContent='Sign in with Google';signIn.style.display='inline-flex';signOut.style.display='none';return}
 slot.textContent=(ready?'✓ Synced progress enabled':'Connecting…')+'  Google account: '+(currentUser.email||'signed-in student');signIn.style.display='none';signOut.style.display='inline-flex';
};
window.addEventListener('weedscout:settings',refresh);
const isFresh=s=>!Object.values(s.sessions||{}).some(x=>x.done||x.evidence||(x.checked||[]).some(Boolean))&&!(s.journal||[]).length&&!(s.experiments||[]).length&&!Object.values(s.portfolio||{}).some(Boolean);
async function writeCloud(){if(!ready||!currentUser)return;try{const payload=window.WeedScoutApp.getState();await setDocFn(docFn(db,'profiles',currentUser.uid),{payload,updatedAt:new Date().toISOString()});window.WeedScoutApp.toast('Cloud backup updated.')}catch(e){cloudError=e.message||'Cloud write failed';refresh();console.warn(e)}}
window.addEventListener('weedscout:change',()=>{if(!ready||!currentUser)return;clearTimeout(savingTimer);savingTimer=setTimeout(writeCloud,1300)});
async function start(){if(!config){authChecked=true;refresh();return}try{
 const [{initializeApp},{getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged},{getFirestore,doc,getDoc,setDoc}]=await Promise.all([
  import(base+'firebase-app.js'),import(base+'firebase-auth.js'),import(base+'firebase-firestore.js')]);
 const application=initializeApp(config);auth=getAuth(application);db=getFirestore(application);docFn=doc;setDocFn=setDoc;
 signInFn=()=>signInWithPopup(auth,new GoogleAuthProvider());logoutFn=()=>signOut(auth);
 onAuthStateChanged(auth,async u=>{authChecked=true;ready=false;currentUser=u;cloudError='';if(u){guestMode=false;try{sessionStorage.removeItem('weedscout_offline_this_tab')}catch(e){}}refresh();if(!u)return;
  try{
   const remoteDoc=await getDoc(doc(db,'profiles',u.uid));
   const local=window.WeedScoutApp.getState();
   if(remoteDoc.exists()&&remoteDoc.data().payload){const remote=remoteDoc.data().payload;
    if(sameProgress(local,remote)){
     // Local progress and cloud progress already match. No choice is needed.
    }else if(!isFresh(local)){
     const useRemote=confirm('A WeedScout cloud project exists for this Google account.\n\nOK = download existing cloud progress into this browser.\nCancel = keep this browser progress and upload it to cloud.\n\nTip: Export a JSON backup first if either version matters.');
     if(useRemote){window.WeedScoutApp.replaceState(remote)}else{ready=true;await writeCloud()}
    } else {window.WeedScoutApp.replaceState(remote)}
   }else{ready=true;await writeCloud()}
   ready=true;refresh();
  }catch(e){cloudError=e.message||'Unable to retrieve cloud progress';refresh();console.warn(e)}
 });refresh();
 }catch(e){authChecked=true;cloudError=e.message||'Could not load Firebase modules';refresh();console.warn(e)}}
window.WeedScoutCloud={login:async()=>{if(!config){alert('Cross-device sync needs Firebase setup. See README.md in your dashboard ZIP.');return}if(!signInFn){alert(cloudError||'Cloud sign-in is not ready. See README.md.');return}try{await signInFn()}catch(e){cloudError=e.message||'Sign-in canceled';refresh()}},logout:async()=>{if(logoutFn){try{await logoutFn()}catch(e){cloudError=e.message;refresh()}}}};
renderWelcome();
start();
