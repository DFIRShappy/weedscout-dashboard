/* WeedScout workshop guidance: offline, deterministic, student-facing; never claims work was completed. */
(function(){
'use strict';
const sections=[
 [1,2,'Plan it','Start by making the problem small and specific. A good first robot knows when to stop.','A clear rule or decision, written in your own words.','decision'],
 [3,3,'Organize it','Keep files in predictable places so you can find code, photos and test results again.','Open the right folder and confirm that the file really saved.','folders'],
 [4,6,'Run it','Commands are just instructions typed into a terminal. Run one, read the result, and change only one thing at a time.','Find the expected result, or save the exact error message.','terminal'],
 [7,7,'Set up the test','A fixed camera and a measured reference make experiments more repeatable.','Check the targets, spacing, and ruler are clearly visible.','board'],
 [8,9,'Run it','A virtual environment keeps project Python packages separate from other software.','Open the actual output file or read the printed version number.','terminal'],
 [10,13,'See the marker','A detector searches for the colored region and estimates its center. Light and camera position matter.','Check the center against the actual marker, not just a success message.','vision'],
 [14,15,'Make a safe decision','Detection is not permission to activate a tool. Uncertain targets must be skipped.','Verify both the positive example and a SKIP example.','decision'],
 [16,22,'Build the rover','Make one hardware connection at a time, with power off while changing wiring.','Compare your build with the kit instructions before applying power.','rover'],
 [23,30,'Drive and align','Start slow, supervised, and without a removal tool. Measure where the camera and wheels actually point.','A repeatable, controlled move or a safe stop is the result.','rover'],
 [31,34,'Study the plants','Photographs need variety: backgrounds, angles, lighting and plants. Repeated copies are not new examples.','Check that labels and photo descriptions reflect what is really visible.','plant'],
 [35,40,'Train and test','Labels teach the model; genuinely unseen images test whether it learned anything useful.','Keep training and test plants separate and count mistakes.','labels'],
 [41,42,'Choose when to skip','A cautious system can avoid acting on low-confidence or conflicting signals.','Measure incorrect targets and skipped targets, not just detections.','decision'],
 [43,52,'Prototype safely','Start with measurements, a blunt mock-up, and a pen tool. Powered mechanisms require adult safety review.','Confirm the turf and people are protected before proceeding.','tool'],
 [53,57,'Measure honestly','Compare methods under similar conditions. Keep failed trials and never invent numbers.','Record counts, conditions and limitations in the notebook.','trial'],
 [58,60,'Explain your work','An engineering story includes what you tried, what failed, what changed, and what the evidence shows.','Explain one decision in your own words with a real example.','story']
];
const help={
 1:[
 ['Look at one real example first. You are not trying to build it today.','Stop after five minutes and write down just what you saw.'],
 ['Describe what it does with everyday words, not a copied sentence.','Try starting with “It uses a camera to…”'],
 ['Find one strength and one limitation; both are part of engineering.','Look for testing conditions or things the team says remain difficult.'],
 ['Choose one improvement your version can test.','“Skip uncertain targets to protect grass” is a measurable focus.'],
 ['Make a small plain-text file and put your own words inside.','Use Save As; reopen the file to prove it saved.']
 ],
 2:[
 ['A project rule is a decision you make before the robot exists.','Start with the title and date; neat formatting is not important.'],
 ['Version 1 should be a small, safe prototype, not a complete weeding machine.','Copy the goal, then point to each part you understand.'],
 ['Safety rules tell you when to stop, before something goes wrong.','Read each rule out loud and say what it prevents.'],
 ['Evidence is proof of what happened, including failures.','A filename and a real measurement are enough to start.'],
 ['Ask for one specific suggestion, then make a visible change.','Write “Parent feedback:” and record the exact suggestion.']
 ],
 3:[
 ['Use File Explorer, not a web browser, to make folders on the computer.','Windows shortcut: Win + E.'],
 ['Make one folder named WeedScout. This is the project home.','Check the name in the File Explorer address bar.'],
 ['Use these eight folder names: 00_admin, 01_research, 02_code, 03_photos, 04_test_data, 05_models, 06_hardware, 07_portfolio.','Create them one at a time; the numbers keep them in order.'],
 ['Inside the photos folder make two smaller folders.','Use raw for untouched photos and labels for annotations.'],
 ['A progress log can be a simple text file.','After saving, reopen it and check the heading is there.']
 ],
 4:[
 ['Install from the official source, not an advertisement or a random “fix” site.','Use the official Python downloads page below.'],
 ['Use the standard installer. Write down any option you change.','Look for the Python launcher on Windows.'],
 ['PowerShell is a text window for running instructions.','You do not need administrator mode for this check.'],
 ['A command ending in --version asks the program to identify itself.','Type exactly: py -3.11 --version'],
 ['Errors are information, not failure. Save the exact message.','Do not guess at a download or run random fixes.']
 ],
 5:[
 ['A .py file is a plain text document with Python instructions.','Create or open hello.py in the 02_code folder.'],
 ['print shows words in the terminal. Quotation marks surround the words.','Try print("WeedScout is alive!") and save with .py, not .txt.'],
 ['cd changes which folder PowerShell is looking inside.','After cd, type pwd to see your current folder if unsure.'],
 ['The command runs the saved file, not what is still typed in Notepad.','Save first, run second. Watch for your sentence.'],
 ['Change only the quoted words so you can see what changed.','Run again and check your own new words appear.']
 ],
 6:[
 ['Variables give names to values, such as a distance in pixels.','Name the file distance.py and put it in 02_code.'],
 ['Assign one number to each variable; = means “store this value.”','Check spelling: pixels and millimeters are different names.'],
 ['Division makes a ratio: pixels / millimeters.','250 / 100 = 2.5 pixels per millimeter.'],
 ['Changing one input lets you discover how the output changes.','300 / 100 = 3.0. Explain the difference.'],
 ['A # comment is a note to a future reader; it does not run.','Write why camera distance changes the ratio.']
 ],
 7:[
 ['Keep the surface flat and choose a background that contrasts with the targets.','A piece of cardboard is fine; expensive turf is not required.'],
 ['Make each paper square the same measured size.','Measure 3 inches on both sides before cutting.'],
 ['That 10 cm line lets you translate photo pixels into real distance.','Place a ruler beside the line to check its length.'],
 ['Separate targets so the detector can tell them apart.','Use a ruler to measure at least 10 cm between markers.'],
 ['Taking the picture directly overhead reduces perspective distortion.','Check all five squares and the reference line are visible.']
 ],
 8:[
 ['A Python virtual environment is a private box for project libraries.','Run the command from the 02_code directory.'],
 ['venv creates the folder that holds the isolated Python and packages.','Look for a new .venv folder; do not edit it by hand.'],
 ['pip is the program that installs libraries into the chosen environment.','Use the .venv Python path, not an unrelated Python install.'],
 ['OpenCV processes images and NumPy works with numbers and arrays.','Wait until the installation finishes; keep the error text if it fails.'],
 ['Importing a package verifies the library can load.','A version number without a traceback is the checkpoint.']
 ],
 9:[
 ['Starter scripts are small programs you can inspect before running.','Use the Starter files link below. On GitHub, open each file, click Raw, then Save As in 02_code. No ZIP is required.'],
 ['The program draws a test image so the expected answer is known.','Run it from the code folder with your .venv Python.'],
 ['Open the output, not just the PowerShell window.','Use File Explorer to find sample_target.png.'],
 ['Identify the colored target, background and reference ticks.','Point to each area on the image.'],
 ['A generated image is a practice input, not proof about real weeds.','Write that distinction in your own words.']
 ],
 10:[
 ['The script searches for blue pixels and estimates the marker center.','Start with the known-good generated image.'],
 ['The result image helps you see what the program selected.','Look for marker_result.png in the code folder.'],
 ['A dot at the center is the visual success check.','The center must land inside the blue square.'],
 ['Pixel coordinates are horizontal X and vertical Y positions.','X increases right; Y usually increases down in images.'],
 ['Explain the picture without technical jargon.','Point right for X and down for Y.']
 ]
};
const tipByAction=[
 [/^press |^click |^open |^select |^right-click |^choose /i,'Do just this click or keypress. Before going on, check that the correct window, folder or page opened.'],
 [/^run |^type |^enter |^execute |^launch /i,'Copy the command exactly if one is shown. Wait for it to finish, then read the output before trying another command.'],
 [/^write |^explain |^describe |^note |^list |^record /i,'Use your own words. Two clear sentences beat a page copied from somewhere else.'],
 [/^save |^create |^make |^add |^put /i,'Check the actual saved file or object exists. If it is a file, reopen it once.'],
 [/^measure |^count |^calculate |^compute /i,'Write down units and actual observations. If a measurement is unavailable, leave it blank instead of guessing.'],
 [/^take |^photograph |^capture |^collect /i,'Check the photo is sharp, dated and saved in the correct folder. Do not discard failed examples.'],
 [/^compare |^test |^try |^check |^verify /i,'Change one thing at a time. Keep the conditions similar and write down misses as well as successes.']
];
const resource={
 4:[['Official Python downloads','https://www.python.org/downloads/']],
 9:[['Starter files + setup instructions','https://github.com/DFIRShappy/weedscout-dashboard/tree/main/starter-code'],
    ['make_sample.py','https://github.com/DFIRShappy/weedscout-dashboard/blob/main/starter-code/make_sample.py']],
 10:[['find_blue_marker.py','https://github.com/DFIRShappy/weedscout-dashboard/blob/main/starter-code/find_blue_marker.py']],
 14:[['safe_decision_demo.py','https://github.com/DFIRShappy/weedscout-dashboard/blob/main/starter-code/safe_decision_demo.py']],
 8:[['Python virtual environments','https://docs.python.org/3/library/venv.html'],['OpenCV Python tutorials','https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html']],
 17:[['Raspberry Pi documentation','https://www.raspberrypi.com/documentation/']],
 18:[['Raspberry Pi setup guide','https://www.raspberrypi.com/documentation/computers/getting-started.html']]
};
function topic(l){
 return sections.find(x=>l.id>=x[0]&&l.id<=x[1])||sections[0]
}
function guide(l,index){
 const step=l.steps[index]||'';
 const t=topic(l);
 const override=help[l.id]?.[index];
 const actionTip=tipByAction.find(([re])=>re.test(step))?.[1];
 const tip=override?.[1]||actionTip||'Use the smallest possible attempt. Stop if you are unsure, then compare what you saw with the instruction.';
 let check=t[4];
 if(/\b(save|file|folder|create|write)\b/i.test(step))check='Find the file or note again after saving. It should contain exactly what you meant to write.';
 if(/\b(run|command|terminal|powershell|execute)\b/i.test(step))check='Compare the terminal output with what the instruction predicts. Save the exact error if it differs.';
 if(/\b(photo|photograph|image|camera)\b/i.test(step))check='Open the real photo or result image and inspect it, rather than trusting a message that says “success.”';
 if(/\b(measure|record|count|trials|error)\b/i.test(step))check='Write the measured value and its unit. Keep any failures and invalid trials in the record.';
 if(/\b(safety|power|motor|wheel|tool|actuator)\b/i.test(step))check='Make sure the setup is stable and supervised. Disconnect power before changing hardware.';
 if(l.id===3&&index===2)check='All eight project folders are visible in File Explorer.';
 if(l.id===5&&index===3)check='PowerShell prints the sentence saved in hello.py.';
 if(l.id===6&&index===2)check='The result is 2.5 for 250 pixels and 100 millimeters.';
 if(l.id===10&&index===2)check='The estimated center visibly falls inside the blue square.';
 return {
  title:t[2],why:override?.[0]||t[3],tip,check,
  demo:demoKind(l,index,step,t[5]),resources:resource[l.id]||[]
 };
}
function demoKind(l,index,step,base){
 if(/\b(folder|directory|file explorer)\b/i.test(step))return 'folders';
 if(/\b(py -|pip |python|powershell|terminal|\.py\b|venv)\b/i.test(step))return 'terminal';
 if(/\b(square|blue target|marker|pixels|coordinate|camera|photograph|image)\b/i.test(step)&&[7,10,11,12,13,28].includes(l.id))return l.id===7?'board':'vision';
 return base;
}
function h(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
function terminalExample(l){
 if(l.id===4)return ['py -3.11 --version','Python 3.11.x'];
 if(l.id===5)return ['py -3.11 hello.py','WeedScout is alive!'];
 if(l.id===6)return ['py -3.11 distance.py','2.5'];
 if(l.id===8)return ['python -m pip install opencv-python numpy','Installation complete / version shown'];
 if(l.id===9)return ['python make_sample.py','Saved sample_target.png'];
 if(l.id===10)return ['python find_blue_marker.py sample_target.png','Marker center: X=290, Y=220'];
 if(l.id===14)return ['python safe_decision_demo.py','TARGET / SKIP decisions printed'];
 return ['Run the lesson command','Read the actual output carefully'];
}
function diagram(kind,l,index){
 if(kind==='folders')return '<div class="coach-folder-tree"><div>📁 <b>WeedScout</b></div><div class="tree-inner">📁 00_admin<br>📁 01_research<br>📁 02_code<br>📁 03_photos<br><span class="tree-inner">📁 raw &nbsp; 📁 labels</span><br>📁 04_test_data<br>📁 05_models<br>📁 06_hardware<br>📁 07_portfolio</div></div><small>Example folder layout. Build these in File Explorer.</small>';
 if(kind==='terminal'){const ex=terminalExample(l);return '<div class="coach-terminal"><div class="coach-terminal-bar"><span>● ● ●</span> Terminal · illustration</div><div class="coach-terminal-body"><div>&gt; <span class="type-line">'+h(ex[0])+'</span></div><div class="terminal-result">'+h(ex[1])+'</div><div>&gt; <span class="coach-caret">▌</span></div></div></div><small>This is a sample display, not an actual command run.</small>'}
 if(kind==='board')return '<div class="coach-board"><span class="board-label">TEST BOARD · TOP VIEW</span><i class="target t1">A</i><i class="target t2">B</i><i class="target t3">C</i><i class="target t4">D</i><i class="target t5">E</i><div class="board-ruler"><span>0</span><span>10 cm</span></div><div class="camera-reticle"></div></div><small>Keep the camera overhead and include a known 10 cm scale.</small>';
 if(kind==='vision')return '<div class="coach-vision"><div class="vision-target"></div><div class="vision-box"><i class="vision-cross"></i></div><span class="vision-label">Detected center</span><div class="vision-scan"></div></div><small>The moving outline shows the idea; real accuracy must be measured.</small>';
 if(kind==='decision')return '<div class="coach-decision"><div class="coach-node">See a possible weed</div><span class="coach-arrow">↓</span><div class="coach-node">Check again: is it reliable?</div><div class="coach-branches"><div><span>YES ↓</span><div class="coach-node small-node">Allowed to consider action</div></div><div><span>NO ↓</span><div class="coach-node small-node stop-node">SKIP · protect turf</div></div></div></div><small>A safe decision can be “do nothing.”</small>';
 if(kind==='rover')return '<div class="coach-rover-stage"><div class="rover-path"></div><div class="rover-body"><i class="rover-camera"></i><i class="rover-wheel left"></i><i class="rover-wheel right"></i></div><div class="rover-marker"></div><span class="rover-stop">STOP</span></div><small>Concept only. Drive slowly and with a supervisor; no tool attached.</small>';
 if(kind==='plant')return '<div class="coach-plant-stage"><div class="plant-card p1">Leaf shape</div><div class="plant-card p2">Side angle</div><div class="plant-card p3">Different light</div></div><small>Three varied pictures teach more than copies of one view.</small>';
 if(kind==='labels')return '<div class="coach-label-stage"><div class="coach-labelled-object"><span>plant</span><i>✳</i></div><div class="coach-split"><span>TRAIN</span><span>TEST</span></div></div><small>Draw a box around what is visible. Keep test plants unseen during training.</small>';
 if(kind==='tool')return '<div class="coach-tool-stage"><div class="tool-grass">▥ &nbsp; TURF SURFACE &nbsp; ▥</div><div class="tool-pen"></div><div class="tool-tip"></div><div class="tool-boundary">NO-GO ZONE</div></div><small>Use a pen or blunt mock-up first. This is not a powered-tool instruction.</small>';
 if(kind==='trial')return '<div class="coach-trial-stage"><div><strong>METHOD A</strong><span>Same target course</span><span>Record every trial</span></div><div><strong>METHOD B</strong><span>Same target course</span><span>Record every trial</span></div></div><small>These are study groups, not fabricated experimental results.</small>';
 return '<div class="coach-story"><span>PROBLEM</span><b>→</b><span>TRY</span><b>→</b><span>MEASURE</span><b>→</b><span>IMPROVE</span></div><small>Use your own work and real measurements.</small>';
}
function renderGuide(l,index){
 const g=guide(l,index);
 return '<div class="coach-explainer"><div class="coach-overline">WHY THIS STEP MATTERS</div><p>'+h(g.why)+'</p></div>'+
 '<div class="coach-diagram" role="img" aria-label="Illustration for '+h(g.title)+'">'+diagram(g.demo,l,index)+'</div>'+
 '<div class="coach-check"><strong>Check your work</strong><p>'+h(g.check)+'</p></div>'+
 '<details class="coach-help"><summary>I need a hint</summary><p>'+h(g.tip)+'</p><p class="coach-help-extra">'+h(l.stuck||'')+'</p></details>'+
 (g.resources.length?'<div class="coach-resources">Helpful reference: '+g.resources.map(([name,url])=>'<a href="'+h(url)+'" target="_blank" rel="noopener noreferrer">'+h(name)+' ↗</a>').join(' · ')+'</div>':'');
}
window.WeedScoutWorkshop={guide,renderGuide};
})();