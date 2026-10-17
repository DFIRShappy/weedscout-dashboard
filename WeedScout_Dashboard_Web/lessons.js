/* Extracted from WeedScout workbook v1.1; keep student progress separate from lesson definitions. */
window.WEEDSCOUT_LESSONS = [
  {
    "id": 1,
    "title": "Find the problem",
    "phase": 0,
    "win": "Understand what WeedScout must do",
    "getReady": "Notebook or plain text file; browser",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Search for and open the Waterloo WeedWarden project; watch or read only five minutes.",
      "In your own words, type one sentence describing what the existing robot does.",
      "Write one thing it does well and one limitation the team described.",
      "Write what YOU want WeedScout to improve: e.g., avoiding damage when uncertain.",
      "Save the five sentences in `01_research/prior_art_notes.md`."
    ],
    "done": "Notes contain the problem, one prior system and your own desired improvement.",
    "stuck": "If jargon is confusing, ask GPT to define just the ONE unfamiliar term, with a lawn example.",
    "evidence": "One paragraph of your writing + page URL."
  },
  {
    "id": 2,
    "title": "Set project boundaries and goals",
    "phase": 0,
    "win": "Know what the first safe, successful prototype must do",
    "getReady": "Notepad, a parent for a five-minute review",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Open Notepad. At the top type `WEEDSCOUT PROJECT RULES`, today's date, and your name.",
      "Under `VERSION 1 GOAL`, write: `Drive by remote control; see a paper target; stop and display its center; no weeding tool attached.`",
      "Under `SAFETY RULES`, write: `No unattended driving. No sharp or powered soil tool in early sessions. Stop and disconnect power before changing hardware.`",
      "Under `EVIDENCE`, write: `Save a photo or video, one measurement, and one sentence about what changed for each milestone.`",
      "Save the text file to your Desktop as `WeedScout_project_rules.txt`. Show it to your parent, record one suggestion and add that suggestion to the file."
    ],
    "done": "The file exists and names a version 1 goal, three clear safety rules and one parent suggestion.",
    "stuck": "If Notepad asks about file location, save on the Desktop today; move the file into `00_admin` after Session 03.",
    "evidence": "`WeedScout_project_rules.txt` written by the student."
  },
  {
    "id": 3,
    "title": "Create the project folders",
    "phase": 0,
    "win": "Make a permanent home for every file",
    "getReady": "Windows 11 File Explorer",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Press Win+E to open File Explorer and click Documents.",
      "Right-click a blank area, select New > Folder, name it `WeedScout`.",
      "Open that folder and make the eight named folders listed earlier (use New > Folder).",
      "Inside `03_photos`, make `raw` and `labels` folders.",
      "Create `00_admin/progress_log.txt` using Notepad and type: `Date | Session | What worked | Problem | Next step`. Save. Move `WeedScout_project_rules.txt` from Desktop into `00_admin`."
    ],
    "done": "Progress log exists in the correct location.",
    "stuck": "If file extensions are hidden, File Explorer > View > Show > File name extensions.",
    "evidence": "Screenshot of folder tree."
  },
  {
    "id": 4,
    "title": "Install Python safely",
    "phase": 0,
    "win": "Run one verified Python command",
    "getReady": "Windows PC and internet",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Open https://www.python.org/downloads/ and choose a supported Python 3 release compatible with the later vision libraries; this guide's commands assume Python 3.11.",
      "Run the official installer; choose the normal supported install path and note whether Windows launcher (`py`) was installed.",
      "Press the Windows key, type PowerShell, open it (NOT as administrator).",
      "Type `py -3.11 --version` and press Enter.",
      "If version appears, save its text to the log; if not, ask GPT about that exact error before continuing."
    ],
    "done": "PowerShell prints a Python 3.11 version.",
    "stuck": "Do not download \"Python fix\" executables from forums. Ask GPT to compare the installed version and launcher.",
    "evidence": "Version text and screenshot."
  },
  {
    "id": 5,
    "title": "Your first Python program",
    "phase": 0,
    "win": "Make the computer talk back",
    "getReady": "Notepad or VS Code + Windows PowerShell",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Open `WeedScout/02_code` in File Explorer.",
      "In Notepad write `print('WeedScout is alive!')` and save as `hello.py` using Save as type = All Files.",
      "Open PowerShell, run `cd \"$HOME\\Documents\\WeedScout\\02_code\"`.",
      "Run `py -3.11 hello.py`.",
      "Replace the text in quotes with your own sentence, save and run again."
    ],
    "done": "Your original sentence appears twice after running.",
    "stuck": "If it says cannot open file, check your `hello.py` extension and current directory with `pwd`.",
    "evidence": "Photo of terminal output + saved hello.py."
  },
  {
    "id": 6,
    "title": "Learn variables with distances",
    "phase": 0,
    "win": "Understand what numbers mean in code",
    "getReady": "Existing Python setup",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Create `distance.py` in `02_code`.",
      "Enter `pixels = 250`, then `millimeters = 100`, on separate lines.",
      "Add `print(pixels / millimeters)`; save and run it.",
      "Change pixels to 300 and run again. Explain why answer changed.",
      "Add a comment line `# pixels per mm depends on camera distance` and save."
    ],
    "done": "Program produces a numeric ratio and you can explain it.",
    "stuck": "If you see NameError, check variable spelling; names are case-sensitive.",
    "evidence": "Code and both outputs."
  },
  {
    "id": 7,
    "title": "Make the first target course",
    "phase": 0,
    "win": "Prepare a winter test environment",
    "getReady": "Cardboard 24x24 in, green paper or turf, blue paper, ruler, tape, phone",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Cover the board with green paper or artificial turf.",
      "Cut five separate blue squares 3 x 3 inches; write A-E on the backs only.",
      "Mark a 10 cm reference segment near one edge with contrasting tape.",
      "Place squares at five spots, at least 10 cm apart.",
      "Photograph from directly above in even light and save to `03_photos/raw` with today's date."
    ],
    "done": "One clear photograph contains five targets and scale reference.",
    "stuck": "If glossy glare covers targets, shift the light and reshoot.",
    "evidence": "Photo + board dimensions."
  },
  {
    "id": 8,
    "title": "Install image-processing software",
    "phase": 0,
    "win": "Prepare a dedicated coding environment",
    "getReady": "PowerShell, internet, Windows",
    "time": "35-60 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Open PowerShell and enter `cd \"$HOME\\Documents\\WeedScout\\02_code\"`.",
      "Run `py -3.11 -m venv .venv` to create an isolated Python environment.",
      "Run `.\\.venv\\Scripts\\python.exe -m pip install --upgrade pip`.",
      "Run `.\\.venv\\Scripts\\python.exe -m pip install opencv-python numpy`.",
      "Run `.\\.venv\\Scripts\\python.exe -c \"import cv2; print(cv2.__version__)\"` (outer shell quoting exactly as shown in the appendix)."
    ],
    "done": "You see an OpenCV version number without a traceback.",
    "stuck": "If pip fails, copy the last 15 error lines to GPT. Never use a random install workaround without understanding it.",
    "evidence": "Python/OpenCV version in log."
  },
  {
    "id": 9,
    "title": "Make a fake camera photo with code",
    "phase": 0,
    "win": "Create a known-good input image",
    "getReady": "Starter Code ZIP from this plan",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Extract the starter code ZIP into `02_code` (or copy its `.py` files there).",
      "Run `.\\.venv\\Scripts\\python.exe make_sample.py` from `02_code`.",
      "Open the new `sample_target.png` using File Explorer.",
      "Point to the blue square, green background and black calibration ticks.",
      "Write one sentence: 'This is a synthetic marker, not a real weed.'"
    ],
    "done": "A generated image exists and looks like a blue square on green.",
    "stuck": "If you see a missing cv2 error, use the `.venv` Python, not `py -3.11`.",
    "evidence": "sample_target.png plus one sentence."
  },
  {
    "id": 10,
    "title": "Locate a blue target",
    "phase": 0,
    "win": "Make the computer find the square",
    "getReady": "Starter script `find_blue_marker.py`, generated image",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Run `.\\.venv\\Scripts\\python.exe find_blue_marker.py sample_target.png`.",
      "Open `marker_result.png` produced by the script.",
      "Check that a visible circle/cross is near the center of the blue square.",
      "Read the X and Y pixel coordinates in PowerShell.",
      "Explain to a parent that X moves left/right and Y moves up/down in the photograph."
    ],
    "done": "Marker center is visually inside the square.",
    "stuck": "If `No blue marker` appears, inspect image filename and compare the marker color; do not adjust 10 values at once.",
    "evidence": "marker_result.png + displayed coordinates."
  },
  {
    "id": 11,
    "title": "Try a real picture",
    "phase": 0,
    "win": "Test the same code against a phone picture",
    "getReady": "Phone photo from Session 7 and USB/cloud file copy",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Copy one real test-board photo from the phone into `02_code` and rename it `real_blue.jpg`.",
      "Run `.\\.venv\\Scripts\\python.exe find_blue_marker.py real_blue.jpg`.",
      "Open the result image and see which square was selected (script intentionally chooses the largest blue region).",
      "Temporarily remove four squares from the board and photograph one alone; rerun with that image.",
      "Note which image was easier to interpret and why."
    ],
    "done": "A real blue target can be outlined and centered.",
    "stuck": "If HSV segmentation misses it, check lighting and adjust only the hue/saturation bounds with GPT explaining the reason.",
    "evidence": "Before/after photos + two observations."
  },
  {
    "id": 12,
    "title": "Measure position error",
    "phase": 0,
    "win": "Learn the difference between a guess and a measurement",
    "getReady": "Ruler, single square, camera mount, progress table",
    "time": "35-50 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Fix the phone/camera at one height and do not move it during this session.",
      "Use the 10 cm reference strip to estimate pixels per millimeter (pixel distance / 100 mm).",
      "Move the blue marker to ten different ruler-measured target positions, keeping camera fixed.",
      "For each image, write estimated center and true center in `04_test_data/marker_trials.csv`.",
      "Compute or ask for the formula `absolute error = |estimate - truth|` for X and Y separately; write your average and largest observed error."
    ],
    "done": "There are 10 recorded trials and no fabricated numbers.",
    "stuck": "If the camera shifted, label affected trials INVALID and redo them.",
    "evidence": "10-row CSV + estimate of average and max error."
  },
  {
    "id": 13,
    "title": "See why lighting matters",
    "phase": 0,
    "win": "Create the first repeatable experiment",
    "getReady": "Test board, lamp, paper, camera",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Select 3 lighting settings: desk lamp, room light, dim room.",
      "Without moving the camera, take five target photos in each lighting condition.",
      "Run detector on each photo and record detected Y/N and center error.",
      "Make a short table of outcomes: 5 trials each condition.",
      "Write one sentence explaining which condition hurt accuracy most."
    ],
    "done": "15 observations recorded, including misses.",
    "stuck": "If every target is found, vary camera angle slightly and repeat five trials; do not invent failures.",
    "evidence": "CSV, lamp diagram, one takeaway."
  },
  {
    "id": 14,
    "title": "Write the first safe-to-target rule",
    "phase": 0,
    "win": "Teach the program to say SKIP",
    "getReady": "Starter script `safe_decision_demo.py`",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Read the six input examples at the top of `safe_decision_demo.py`.",
      "Run `.\\.venv\\Scripts\\python.exe safe_decision_demo.py`.",
      "Identify which lines say TARGET and which say SKIP.",
      "Change the minimum confidence from 0.85 to 0.95; run again.",
      "Explain why rejecting an uncertain target could protect grass even though some weeds get missed."
    ],
    "done": "You can explain a false positive and an intentional skip.",
    "stuck": "This script uses invented example scores to demonstrate logic; it does not establish calibrated probabilities or real-world safety.",
    "evidence": "Terminal output + your explanation."
  },
  {
    "id": 15,
    "title": "First mini-demonstration",
    "phase": 0,
    "win": "Complete the first portfolio milestone",
    "getReady": "Phone camera / screenshot capture",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Arrange one blue marker on the test mat.",
      "Record a 15-30 second video showing the image, detector output and SKIP decision example.",
      "Describe what code does and what it DOES NOT do (not weed AI yet).",
      "Save video as `06_videos/YYYY-MM-DD_S15_marker-demo.mp4`.",
      "Ask a parent one question: 'Can you tell from my demo what it measures?'"
    ],
    "done": "Short demo is saved; your parent can describe the functionality accurately.",
    "stuck": "If video is awkward, start by filming the screen and narrate afterward.",
    "evidence": "Video, one honest limitation and next improvement."
  },
  {
    "id": 16,
    "title": "Choose the indoor rover",
    "phase": 1,
    "win": "Make a platform decision based on requirements",
    "getReady": "Manufacturer documentation + a parent",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Write 4 non-negotiables: controllable at low speed; camera support; documented Python APIs; physical access to the power switch.",
      "Write 3 unknowns: traction on grass, underbody clearance, load margin for extractor.",
      "Read the SunFounder PiCar-X v2.0 'About this kit' and 'What Else Do You Need?' pages.",
      "Compare the exact vendor listing and manual version, verify what batteries/Pi/cables are included, and confirm returns.",
      "Record decision BUY / BORROW / HOLD; have parent place any order, not the assistant."
    ],
    "done": "A shopping decision exists with a documented risk statement.",
    "stuck": "Do not substitute a random robot that only looks similar. Motor commands are hardware-specific.",
    "evidence": "Saved checklist + chosen model/revision."
  },
  {
    "id": 17,
    "title": "Set up Raspberry Pi storage",
    "phase": 1,
    "win": "Prepare Raspberry Pi OS and credentials",
    "getReady": "Raspberry Pi, quality 32GB microSD, Windows PC, microSD reader",
    "time": "35-55 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Install official Raspberry Pi Imager from https://www.raspberrypi.com/software/.",
      "Insert microSD and open Imager; choose the EXACT Pi model from its list.",
      "Choose Raspberry Pi OS 64-bit Desktop that is compatible with the exact kit/revision (check SunFounder updated OS notes first).",
      "Set a non-personal device hostname like `weedscout-pi`, a unique user and password, Wi-Fi and SSH if prompted.",
      "Check target device is the MICROSD, not your Windows drive, before clicking Write; let verify complete."
    ],
    "done": "Imager verification succeeds and credentials are stored securely by family (not put in screenshots).",
    "stuck": "If Imager cannot find microSD, stop; never choose a drive you are unsure about.",
    "evidence": "Photo of Pi/microSD + OS version (not credentials)."
  },
  {
    "id": 18,
    "title": "Boot the Pi for the first time",
    "phase": 1,
    "win": "Prove the tiny computer works",
    "getReady": "Raspberry Pi, SD, official supply, monitor and keyboard or SSH",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "With motor battery power disconnected, insert prepared microSD into the Pi.",
      "Connect the official Pi PSU or SunFounder-defined safe supply and start the Pi.",
      "If using monitor: log in to the desktop. If headless: from Windows run `ssh <pi-user>@weedscout-pi.local` using YOUR actual username.",
      "Type `hostname` and then `python3 --version` on the Pi.",
      "Record both results; power down with `sudo shutdown -h now` and wait before unplugging."
    ],
    "done": "Pi responds with its hostname and Python version.",
    "stuck": "If SSH fails, try monitor setup first, confirm same Wi-Fi and IP. Password typing is invisible; that is expected.",
    "evidence": "Host and Python version, not private IP/password."
  },
  {
    "id": 19,
    "title": "Sort and inspect chassis parts",
    "phase": 1,
    "win": "Start building without miswiring",
    "getReady": "Exact printed PiCar-X v2 manual, parts tray, screwdriver, adult",
    "time": "35-60 minutes",
    "safety": "Adult present required",
    "steps": [
      "Open the exact version's assembly checklist and locate every screw, bracket, motor, cable and servo.",
      "Place small hardware into labeled cups or zip bags.",
      "Read the servo-zeroing warning BEFORE fastening any servo horns.",
      "Check the printed instructions against the kit revision; take photographs of connectors now.",
      "Build only the non-electrical base plates and motor mounts from the first part of the manual; stop before power wiring."
    ],
    "done": "Parts checklist has no missing items and base sits flat on a table.",
    "stuck": "If missing or mismatched, contact seller; do not force a connector or reuse unrelated screws.",
    "evidence": "Parts inventory photo + base photo."
  },
  {
    "id": 20,
    "title": "Zero steering and camera servos",
    "phase": 1,
    "win": "Prevent servo damage during assembly",
    "getReady": "Pi + SunFounder manual and adult",
    "time": "30-60 minutes",
    "safety": "Adult present required",
    "steps": [
      "Read https://docs.sunfounder.com/projects/picar-x-v20/en/latest/adjust_servo.html fully.",
      "Boot the Pi and install the prerequisites listed by the manufacturer if not already done (this can be split across days).",
      "With moving linkage unattached, follow the EXACT manual's zero/center routine for your Robot HAT revision.",
      "Mark the neutral servo horn position with a removable piece of tape.",
      "Only after zeroing, fasten steering/camera linkages according to the printed assembly instructions."
    ],
    "done": "All servo mechanisms move to safe center without binding.",
    "stuck": "If servo buzzes continuously or hits a stop, cut power and reposition; NEVER force it by hand while powered.",
    "evidence": "Video of centered servo + version of instructions used."
  },
  {
    "id": 21,
    "title": "Finish rover assembly",
    "phase": 1,
    "win": "Make a complete but powerless car",
    "getReady": "PiCar-X kit and parent",
    "time": "35-65 minutes",
    "safety": "Adult present required",
    "steps": [
      "Attach wheels, frame and camera mount using the numbered printed manual sequence.",
      "Plug motor, servo and camera connectors only into manufacturer-specified sockets; match labels and polarity exactly.",
      "Route all wires away from tires, steering and pan/tilt joints.",
      "Confirm switch OFF, then with an adult connect the exact kit-approved power source.",
      "Do not add any weed-removal equipment or extra battery yet."
    ],
    "done": "Wheels turn freely by hand with power disconnected; no loose wires near moving parts.",
    "stuck": "If a cable reaches its limit at full steering, reroute before powering.",
    "evidence": "Four angle photographs + photograph of exposed power switch."
  },
  {
    "id": 22,
    "title": "Install official robot libraries",
    "phase": 1,
    "win": "Run the maker-provided setup exactly once",
    "getReady": "Pi with network, terminal, manufacturer v2.0 Python setup page",
    "time": "35-70 minutes",
    "safety": "Adult present required",
    "steps": [
      "Open https://docs.sunfounder.com/projects/picar-x-v20/en/latest/python/install_all_modules.html.",
      "Run ONLY the commands for your exact supported Pi OS and kit version; keep terminal output.",
      "If one command fails, stop there and save its full error text.",
      "Use the documented setup to enable required I2C and any camera interfaces.",
      "After installing, restart if the manual asks; do not copy older v1 instructions into v2."
    ],
    "done": "`picarx` can be imported or official examples start without missing-module errors.",
    "stuck": "A `pip --break-system-packages` instruction, if shown in the official manual, is not a general troubleshooting fix. Do not try random sudo pip commands.",
    "evidence": "Setup notes, install URLs and any errors."
  },
  {
    "id": 23,
    "title": "Make a wheel move slowly",
    "phase": 1,
    "win": "First movement is controlled and tiny",
    "getReady": "Fully assembled PiCar-X, clear indoor floor, parent",
    "time": "30-50 minutes",
    "safety": "Adult present required",
    "steps": [
      "Pick a 2 x 2 m clear flat floor area with no stairs, pets or bystanders; tape off the edges.",
      "Place robot on a stable stand with driving wheels just off the ground; keep fingers away.",
      "Open the official `2.move.py` example described in the manufacturer movement lesson and read what each movement does.",
      "Use the manual's tested command `cd ~/picar-x/example` then `sudo python3 2.move.py` while adult controls the power switch.",
      "Confirm the script stops; THEN try a floor run at low speed using official keyboard controls."
    ],
    "done": "Car moves, turns and stops with no unexpected motion.",
    "stuck": "If it runs backward or wheels disagree, stop and follow official motor-direction calibration.",
    "evidence": "10-second demo of a cautious first movement."
  },
  {
    "id": 24,
    "title": "Drive with a keyboard",
    "phase": 1,
    "win": "Prove stop command before anything clever",
    "getReady": "Rover and keyboard, adult",
    "time": "30-45 minutes",
    "safety": "Adult present required",
    "steps": [
      "Open official keyboard lesson and locate `3.keyboard_control.py`.",
      "Put rover on open flat floor; remove any tool mount.",
      "Run `cd ~/picar-x/example`, then `sudo python3 3.keyboard_control.py`.",
      "Practice W, S, A, D for short movements and Ctrl+C to exit; use the physical power switch to demonstrate a safe stop.",
      "Draw a 50 cm taped lane and drive from end to end five times slowly."
    ],
    "done": "Five trials recorded: lane completed Y/N and any bump or overshoot.",
    "stuck": "Software stop can fail during a crash: physical access to power is mandatory.",
    "evidence": "Drive table and 20-second demo."
  },
  {
    "id": 25,
    "title": "Connect the rover camera",
    "phase": 1,
    "win": "See a live picture from the robot",
    "getReady": "Rover camera and official video-car lesson",
    "time": "30-50 minutes",
    "safety": "Adult present required",
    "steps": [
      "Open the manufacturer PiCar-X `11.video_car.py` lesson.",
      "Run `cd ~/picar-x/example` then `sudo python3 11.video_car.py`.",
      "Using a laptop/browser on the same local network, view the documented live stream address as shown in your terminal.",
      "Hold one blue paper square in the camera's view; note whether it is sharp.",
      "Stop the program and save one screenshot."
    ],
    "done": "You can see a live blue marker in the camera video.",
    "stuck": "If video is black, power off and reseat camera cable following manufacturer instructions; never hot-plug the ribbon.",
    "evidence": "Screenshot + camera software version."
  },
  {
    "id": 26,
    "title": "Make the camera look at the ground",
    "phase": 1,
    "win": "Measure a safe viewing footprint",
    "getReady": "Paper, ruler, temporary clamp/mount, Rover OFF",
    "time": "35-60 minutes",
    "safety": "Adult present required",
    "steps": [
      "Power OFF and remove battery/USB before changing camera hardware.",
      "Sketch the rover and put a dot where the removal tool would ideally reach the ground.",
      "Use the kit is camera tilt only within its safe range; if it cannot point vertically downward, design a small **fixed** bracket or second camera mount (no forced servo angles).",
      "Place a ruler on the mat and photograph the visible patch from a fixed height.",
      "Record image width, estimated ground-view width and the tool-center offset; leave at least 2 cm safe mechanical clearance (provisional)."
    ],
    "done": "A camera captures the ground around a designated tool target and you know the visible area size.",
    "stuck": "If camera cannot view the proposed tool point without distortion, move the camera or redefine tool location; do not solve it with blind motion.",
    "evidence": "Camera footprint sketch, mounted photo and measurements."
  },
  {
    "id": 27,
    "title": "Perform the grass mobility test",
    "phase": 1,
    "win": "Decide if kit can be the outdoor chassis",
    "getReady": "Artificial turf square, later short grass area, parent",
    "time": "30-45 minutes",
    "safety": "Adult present required",
    "steps": [
      "On indoor turf, tape a 50 cm straight test lane with large safe run-off space.",
      "With camera and NO tool, drive the lane 10 times at low speed. Record jam, slip and stopping position.",
      "Photograph grass caught in wheels, if any; measure lowest chassis clearance in mm.",
      "If safely possible and turf is not frozen/wet, test one short flat real-grass strip with supervision; otherwise defer to spring.",
      "Decision: PASS for prototype / LIMITED INDOOR ONLY / CHANGE CHASSIS. Record, do not assume."
    ],
    "done": "A documented evidence-based mobility decision exists.",
    "stuck": "If wheels spin or chassis drags, do not raise speed to compensate; stop and revisit platform selection.",
    "evidence": "Trial sheet and clearance measurement."
  },
  {
    "id": 28,
    "title": "Align the robot to a marker",
    "phase": 1,
    "win": "Translate camera pixels to an aiming action",
    "getReady": "Rover without cutting tool, blue paper, taped indoor mat",
    "time": "30-55 minutes",
    "safety": "Adult present required",
    "steps": [
      "Draw a crosshair on the live image or marker-result photograph at the proposed tool point—not automatically the image center.",
      "Put a single paper marker at three positions and record whether it appears left, right or aligned to the crosshair.",
      "Make only ONE short steering/forward adjustment at a time using keyboard controls, stopping fully between movements.",
      "Record first and final position; repeat for five trials.",
      "If stable, experiment with a software prompt saying LEFT / RIGHT / STOP while the actual motor remains manually operated."
    ],
    "done": "At least 4 of 5 manual alignments place marker within a measured 2 cm radius (target, not guaranteed).",
    "stuck": "On an Ackermann-steered car like PiCar-X, tight turning is not point rotation; allow a multi-step reposition path.",
    "evidence": "Five before/after photos, measured errors."
  },
  {
    "id": 29,
    "title": "Add a timeout and a no-tool stop",
    "phase": 1,
    "win": "Robot cannot keep driving when logic gets stuck",
    "getReady": "Rover, code editor, parent",
    "time": "35-55 minutes",
    "safety": "Adult present required",
    "steps": [
      "Copy (do not overwrite) the working manufacturer example to a student-named new file.",
      "Review the code and find where forward movement begins and where stop occurs.",
      "Add a `try/finally` cleanup that calls the verified `px.stop()` API so most exceptions trigger a stop.",
      "Make each movement burst <= 0.25 seconds and set a maximum total experiment time (for example 10 s).",
      "Test with wheels OFF the ground first; deliberately interrupt using Ctrl+C to see whether wheels stop. Then test on floor."
    ],
    "done": "Interrupt reliably stops the motor in five trials; physical cutoff is still required.",
    "stuck": "If stopping fails even once, treat as no-go and diagnose before any further automation.",
    "evidence": "Modified script, stop times and interruption log."
  },
  {
    "id": 30,
    "title": "Indoor rover mini-demo",
    "phase": 1,
    "win": "Show movement, detection and deliberate stopping",
    "getReady": "Rover, camera, markers, no soil tool",
    "time": "35-55 minutes",
    "safety": "Adult present required",
    "steps": [
      "Set out five positions for a single paper marker on test mat.",
      "For each, use camera to identify marker, then carefully aim with slow remote control.",
      "At end of each run call stop and show live position; show SKIP behavior for one ambiguous/no-marker case.",
      "Film one 45-60 second demonstration with verbal explanation.",
      "Write three limitations: this is colored-marker vision; not a dandelion classifier; not automatic weeding."
    ],
    "done": "Demonstration is repeatable and limitations are stated.",
    "stuck": "If integrated live detector is unreliable, show sequential separate demos of vision and mobility; be accurate, do not fake one continuous run.",
    "evidence": "Video + test table."
  },
  {
    "id": 31,
    "title": "Learn what a dandelion actually looks like",
    "phase": 2,
    "win": "Define one plant class precisely",
    "getReady": "Botany reference + photos",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Open University of Minnesota or local extension dandelion identification pages.",
      "Note diagnostic leaves and rosette form in your OWN words.",
      "Compare visually with at least two lookalikes, such as catsear and plantain; list one difference each.",
      "Choose your label scheme: `dandelion` versus all other scenes, or `dandelion` + `other_broadleaf` if sufficient labels.",
      "Save five legally usable reference links with attribution; note that references are not your field training data."
    ],
    "done": "One clear target definition and three possible confusions recorded.",
    "stuck": "If you cannot identify a plant confidently, label `unknown` and exclude it from training until identified.",
    "evidence": "Plant class specification and source URLs."
  },
  {
    "id": 32,
    "title": "Start an indoor plant nursery",
    "phase": 2,
    "win": "Collect real living examples during winter",
    "getReady": "Deep pots, tray, soil, clean grass seed, dandelion source, light, parent",
    "time": "30-45 minutes",
    "safety": "Adult present required",
    "steps": [
      "Put a waterproof tray on a stable, pet-inaccessible surface.",
      "Prepare two deep pots of turf grass from locally appropriate seed and separate deep pots of ethically obtained dandelion seeds/plants.",
      "Label each pot with pot ID and planting date; use clean potting mix and do NOT transplant dandelions outside.",
      "Follow supplier light, germination and watering recommendations, keeping soil moist but not waterlogged.",
      "Photograph pots weekly from above; plant age and indoor stage must be recorded."
    ],
    "done": "Labeled pots exist and initial images are saved; germination is not required to pass this session.",
    "stuck": "If seeds fail or mature plants are unavailable, use authorized/public images now and postpone root extraction tests; never claim seedlings represent mature taproots.",
    "evidence": "Pot IDs, supplier, start date and photos."
  },
  {
    "id": 33,
    "title": "Plan repeatable plant photography",
    "phase": 2,
    "win": "Prevent misleading AI training data",
    "getReady": "Phone or rover camera; neutral background; tape measure",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Choose four image conditions to vary: light level, viewing angle, plant age and background (pot vs. grass).",
      "Create `04_test_data/photo_manifest.csv` columns: filename, date, pot_id, species, lighting, angle, background, notes.",
      "Take 10 photos of different views; record each in manifest immediately.",
      "Include at least 5 images with NO target dandelion.",
      "Save originals; do not edit originals or use the same image twice under new names."
    ],
    "done": "15 photos and matching manifest rows, including negatives.",
    "stuck": "If camera is blurry, take a new photo rather than sharpening and treating it as independent data.",
    "evidence": "Photo manifest and a sample sheet."
  },
  {
    "id": 34,
    "title": "Collect diverse examples, not duplicates",
    "phase": 2,
    "win": "Expand dataset toward a first useful model",
    "getReady": "Living pots or licensed datasets",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Take 10-15 photos on at least three DIFFERENT days or setups instead of 100 nearly identical bursts.",
      "Include changed plant sizes and lighting; if plants still dormant use suitable, appropriately licensed external photos with attribution.",
      "Mark each photo source: SELF / PUBLIC and full source URL where applicable.",
      "Aim for roughly 100-200 varied labeled photographs as an initial target, not a required threshold.",
      "Create a folder of separate truly held-out images from a different day/location that will not be used during training."
    ],
    "done": "Images have diverse capture sessions and provenance.",
    "stuck": "Avoid claiming a model can generalize to spring lawns when all pictures were indoors.",
    "evidence": "Image count by day and source."
  },
  {
    "id": 35,
    "title": "Learn to draw bounding boxes",
    "phase": 2,
    "win": "Describe exactly where a weed is",
    "getReady": "Browser-based image annotation app or offline annotator, labeled photos",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Choose an annotation tool that supports YOLO detection exports and read its data/publication terms BEFORE uploading family images.",
      "Open 10 training images and create one bounding rectangle around each visible dandelion plant, not around the pot.",
      "Mark no-target scenes as empty-label negatives; do not draw fake target boxes.",
      "Export labels and inspect one annotation line; note class 0 and normalized center/width/height values.",
      "Have a parent or school mentor review five boxes for consistency; student makes corrections."
    ],
    "done": "Ten photographs have correctly placed boxes and usable annotations.",
    "stuck": "If annotation tool is confusing, use it just for five photos; do not attempt all images at once.",
    "evidence": "Five screenshots + export sample."
  },
  {
    "id": 36,
    "title": "Label the rest of the training set",
    "phase": 2,
    "win": "Finish a clean initial dataset",
    "getReady": "Annotations from prior session",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Annotate 15-25 images per mini-session; this lesson can repeat on several days.",
      "For each image, ask: correct species? bounding box tight? background/hard case represented?",
      "Flag ambiguous plants `VERIFY`, do not make up species labels.",
      "Run the annotation tool's consistency preview before export.",
      "Record counts of positive target boxes, negative images and excluded unknowns."
    ],
    "done": "Every chosen training image is labeled or explicitly excluded.",
    "stuck": "If monotonous, use two 12-minute labeling sprints separated by a break. Accuracy matters more than throughput.",
    "evidence": "Exported labels and counts."
  },
  {
    "id": 37,
    "title": "Split data without leakage",
    "phase": 2,
    "win": "Make evaluation scientifically valid",
    "getReady": "Dataset manifest, annotation tool",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Group near-duplicate photographs by plant/pot ID and capture day; they belong together.",
      "Assign groups to training, validation and test; aim around 70/20/10 if numbers permit.",
      "Ensure the test set comes from distinct plants/sessions where possible, not just adjacent video frames.",
      "Check every split has enough labeled positives and negatives for meaningful evaluation.",
      "Freeze and copy the test set into a `held_out_DO_NOT_TRAIN` folder before any training."
    ],
    "done": "No near-duplicate group appears in both training and test.",
    "stuck": "If there are not enough independent plants, record small-sample limitation and collect more rather than manipulating splits.",
    "evidence": "Split manifest and image counts."
  },
  {
    "id": 38,
    "title": "Train a small first AI model",
    "phase": 2,
    "win": "Get an actual trained detector",
    "getReady": "Windows computer, Python 3.11 venv, YOLO-format data",
    "time": "30-60 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Read current official Ultralytics installation and fine-tuning docs and check supported dependencies.",
      "Use the dedicated venv and run `.\\.venv\\Scripts\\python.exe -m pip install ultralytics` (large download possible).",
      "Create `dataset/data.yaml` listing train and validation image paths and class names; compare against official example in appendix.",
      "Run the starter training script with small YOLO model (official current example uses `yolo26n.pt`), `epochs=30`, `imgsz=640`, conservative workers on Windows.",
      "Record training time, model version, data counts and the output path. Keep the original weights and plots."
    ],
    "done": "Training completes and creates `best.pt` (or a recorded exact output checkpoint).",
    "stuck": "If CPU training is slow, start with a SMALL image set and 5 epochs just to test the pipeline; do not present smoke-test accuracy as final.",
    "evidence": "Training logs, learning curves and resulting model file."
  },
  {
    "id": 39,
    "title": "Test on genuinely unseen photos",
    "phase": 2,
    "win": "Find out what model does not know",
    "getReady": "Trained model, isolated test images",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Run prediction on five `held_out_DO_NOT_TRAIN` photographs.",
      "Look at every result and compare with the manually marked true weeds.",
      "Count TP (real weed found), FP (false weed claimed), FN (real weed missed), TN (no weed correctly ignored) in a test sheet.",
      "Calculate precision = TP/(TP+FP) and recall = TP/(TP+FN) only if denominators nonzero.",
      "Write two failure cases in words without blaming the software."
    ],
    "done": "A confusion count and two actual failure examples are saved.",
    "stuck": "If model calls everything a weed, check labels/class mapping and train/test data; do not just raise confidence until image results look good.",
    "evidence": "Predictions, table, example errors."
  },
  {
    "id": 40,
    "title": "Try unfamiliar lighting and grass",
    "phase": 2,
    "win": "Challenge the model outside its comfort zone",
    "getReady": "Different background/camera/light; no powered mechanism",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Take 5 photos against living grass or close turf where safe/available; include scenes without weeds.",
      "Take 5 more with changed lighting/camera height.",
      "Do not use these images to retrain before first evaluating and recording performance.",
      "Run the existing model and collect counts of FP and missed weeds.",
      "Identify ONE dominant failure and a specific improvement to try later."
    ],
    "done": "10 challenge cases and one data-grounded change proposal.",
    "stuck": "A weak first model is normal. Keep its results as baseline instead of hiding them.",
    "evidence": "First challenge table + before retraining checkpoint."
  },
  {
    "id": 41,
    "title": "Teach the robot to say SKIP for uncertainty",
    "phase": 2,
    "win": "Implement a measurable safety policy",
    "getReady": "Model outputs, webcam/rover photos, simple CSV experiment",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Define conservative action rules BEFORE looking at held-out results: e.g. class score threshold, center must remain stable across three stopped frames, target must be inside a permitted ground-view zone.",
      "Set trial thresholds based on a *validation* set, not the frozen test set; high raw class score is NOT a calibrated probability of correctness.",
      "Use `decision_policy.py` starter code to demonstrate baseline vs verification using toy inputs; explain each line.",
      "Run both rules on the same stored real model detections; record ACCEPT/SKIP and whether accepted targets were correct.",
      "Save the exact threshold settings as `policy_v1.json`, not just notes."
    ],
    "done": "One reproducible policy outputs ACCEPT or SKIP for a sample set.",
    "stuck": "If detection center jumps between frames, classify as unstable and skip rather than allowing a long driving hunt.",
    "evidence": "Policy settings, trial CSV and explanation."
  },
  {
    "id": 42,
    "title": "Compare baseline and careful targeting",
    "phase": 2,
    "win": "Get a defensible research result without cutting grass",
    "getReady": "Frozen independent test images or frames, spreadsheet/CSV",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Define baseline: act on any detected object above a simple fixed confidence threshold.",
      "Define WeedScout policy: baseline threshold PLUS multi-frame localization stability PLUS protected-zone check.",
      "Run BOTH on the exact same sequence of target/negative scenes without moving the camera between policy evaluations.",
      "Report accepted-target count, incorrectly accepted count, false attempts per 100 accepted, and how many real weeds were skipped.",
      "Make a simple risk-versus-coverage plot by varying thresholds ONLY using validation data; reserve frozen test data for final assessment."
    ],
    "done": "Comparison table and a transparent summary, even if cautious policy does not win.",
    "stuck": "Never alter test labels or conditions after seeing results. Better to collect a second independent test set.",
    "evidence": "Side-by-side table, plot and summary."
  },
  {
    "id": 43,
    "title": "Measure tool space",
    "phase": 3,
    "win": "Identify what fits before designing a machine",
    "getReady": "Rover OFF, ruler, graph paper",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "With rover completely powered off, measure underbody clearance, wheel separation, free length and camera-to-tool offset in mm.",
      "Draw a top view and side view with dimensions; mark moving wheel and cable danger zones.",
      "Decide where a tool would touch soil and whether the rover must straddle the target.",
      "Draw a maximum safe footprint circle around the point, and a keep-out boundary around the wheels.",
      "If mechanism cannot physically fit, document that and design a separate bench carriage rather than forcing a bad layout."
    ],
    "done": "Two labeled drawings and five measurements exist.",
    "stuck": "A fancy CAD model is NOT required; accurate pencil diagrams are better than fake precision.",
    "evidence": "Side/top sketches with ruler visible."
  },
  {
    "id": 44,
    "title": "Write competing mechanism ideas",
    "phase": 3,
    "win": "Make a reasoned choice instead of copying a drill",
    "getReady": "Pencil, paper, extension advice",
    "time": "25-40 minutes",
    "safety": "Adult present required",
    "steps": [
      "Read the University of Minnesota Extension page on dandelion taproots and regrowth.",
      "Sketch A: a blunt two-prong fork + vertical lift. Sketch B: narrow coring tube + plug lift.",
      "For each, write how the tool enters, lifts, how it might harm roots/grass, and how you would remove stuck soil.",
      "Choose 4 metrics: extracted root length, removed/damaged turf area, peak force, time per attempt.",
      "Have an adult review the sketches for pinch, puncture and moving-part hazards."
    ],
    "done": "Two labeled concepts and same four comparison metrics exist.",
    "stuck": "Do not claim the corer is inherently more efficient; test it.",
    "evidence": "Sketch sheet and comparison matrix."
  },
  {
    "id": 45,
    "title": "Make blunt manual prototypes",
    "phase": 3,
    "win": "Experiment without motors or sharp powered tools",
    "getReady": "Blunt toy fork/plastic tool, cardboard, small containers of damp potting soil, adult",
    "time": "35-55 minutes",
    "safety": "Adult present required",
    "steps": [
      "Prepare two soil containers with similar fill depth and moisture.",
      "Create a simple hand-operated blunt lifting fork mockup from safe materials and a round plug mockup using a suitable blunt plastic tube.",
      "Operate each manually in plain soil (NO live plants yet); wear eye protection if pieces might spring.",
      "Photograph the holes and measure diameters with a ruler.",
      "Score each concept for alignment, force feel and amount of disturbed soil. Do not attach to rover."
    ],
    "done": "Two prototypes demonstrably enter/lift soil manually and holes measured.",
    "stuck": "If any tool feels sharp or unstable, stop and soften or replace it; adult handles any fabrication.",
    "evidence": "Prototype photos and hole measurements."
  },
  {
    "id": 46,
    "title": "Measure extraction forces",
    "phase": 3,
    "win": "Turn mechanical impressions into actual numbers",
    "getReady": "Spring/luggage scale with reasonable range, blunt tools, adult",
    "time": "30-50 minutes",
    "safety": "Adult present required",
    "steps": [
      "Ask an adult to verify that the scale and anchor can safely carry expected loads; use light manual forces only.",
      "Prepare matched pots or containers with similar soil moisture and fill depth.",
      "Attach scale in the force direction, pull the tool SLOWLY, and note peak indicated force; no jerking.",
      "Do 5 trials per tool, with comparable fresh soil sections, resetting conditions.",
      "Write the median force and note possible measurement errors and whether a root was present."
    ],
    "done": "10 readings with units and test conditions; no motor involved.",
    "stuck": "If scale pegs out or attachment slips, discard that setup. Never exceed rated load.",
    "evidence": "Force data and setup photograph."
  },
  {
    "id": 47,
    "title": "Measure lawn disturbance",
    "phase": 3,
    "win": "Measure collateral damage visibly",
    "getReady": "Centimeter-grid transparency or squared paper, soil/turf mats",
    "time": "30-45 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "After each manual tool trial, photograph the impact area from above alongside a ruler.",
      "Place a transparent 1cm square grid over image or use image analysis to approximate area of disrupted turf.",
      "Count visibly altered squares and note area in cm^2 with clear approximation.",
      "Repeat 5 times for each prototype under comparable conditions.",
      "Make a chart of disturbance area versus root length removed (if available), and describe tradeoffs."
    ],
    "done": "At least 10 area measurements and uncertainty note.",
    "stuck": "Do not confuse hole area with all possible grass injury; record the proxy definition honestly.",
    "evidence": "Measurements, photographs and comparison chart."
  },
  {
    "id": 48,
    "title": "Select the tool design",
    "phase": 3,
    "win": "Choose based on evidence",
    "getReady": "Test tables from Sessions 46-47",
    "time": "25-40 minutes",
    "safety": "Adult present required",
    "steps": [
      "Create a scorecard with accuracy/footprint, force, ease of clearing soil, safety, weight and cost.",
      "Use weights you choose before scoring, and explain them in writing.",
      "Select the fork, corer, or a redesigned third option; support choice with at least two measured findings.",
      "Write three failure modes (jam, missed root, grass injury) and proposed mitigations.",
      "Review decision with a teacher/parent before any powered design."
    ],
    "done": "A clear winner or well-explained redesign is recorded with data.",
    "stuck": "If neither mechanism is safe/feasible, keep a manual attachment and focus on AI targeting research.",
    "evidence": "Decision matrix, sketches and review signoff."
  },
  {
    "id": 49,
    "title": "Make a pen tool for alignment",
    "phase": 3,
    "win": "Test motion WITHOUT soil penetration",
    "getReady": "Removable dry-erase marker or felt-tip pen, nonpowered 3D-printed/cardboard holder, paper, parent",
    "time": "35-50 minutes",
    "safety": "Adult present required",
    "steps": [
      "Disconnect rover power and make a passive tool mount that holds a blunt felt-tip pen vertically.",
      "Fit it so the pen does NOT contact the floor while the rover drives.",
      "Stop robot, manually lower/position the pen on a sheet of paper placed at the target point.",
      "Measure distance from printed target center to actual pen dot in 10 trials.",
      "Record mean and largest targeting error; redesign camera offset if necessary."
    ],
    "done": "10 pen-dot alignment trials completed with power-off adjustments.",
    "stuck": "If mounting shifts, retighten bracket or use a stationary bench jig. Never run wheels with pen digging into carpet or turf.",
    "evidence": "Dot-test sheet, photos and measurement CSV."
  },
  {
    "id": 50,
    "title": "Design safety controls before powering anything",
    "phase": 3,
    "win": "Show mechanism can fail safely",
    "getReady": "Parent/qualified mentor, diagrams and exact actuator datasheet",
    "time": "25-45 minutes",
    "safety": "Adult present required",
    "steps": [
      "Draw separate electrical blocks: main rover power, tool power, actuator controller, safety cutoff, depth limit and fuse.",
      "Require a physical emergency stop or power cutoff that directly isolates tool actuator power regardless of software.",
      "Define guards, pinch-point exclusion zone, maximum travel, force/current limit, loss-of-signal behavior and lift/transport lock.",
      "Ask adult and qualified mentor to inspect your hardware-specific wiring and risk assessment BEFORE building.",
      "Record APPROVED / NEEDS CHANGE / NO POWERED TOOL; STOP if not approved."
    ],
    "done": "A documented safety review is completed and parent can disconnect tool power instantly.",
    "stuck": "A stop button that only calls a Python function is not a safety interlock; do not proceed on that basis.",
    "evidence": "Risk assessment, schematic and signoff."
  },
  {
    "id": 51,
    "title": "Build an actuator bench jig - optional stretch",
    "phase": 3,
    "win": "Move a guarded mechanism only in a fixed enclosure",
    "getReady": "Only rated low-voltage parts APPROVED at Session 50, adult",
    "time": "35-60 minutes",
    "safety": "Adult present required",
    "steps": [
      "Secure the tool mount to a heavy fixed bench instead of rover; clamp and check it cannot tip.",
      "Connect only the manufacturer-rated actuator with correct fused supply and reviewed polarity/wiring; parent does electrical work if unfamiliar.",
      "Test limit switches/cutoff with actuator disconnected or non-moving first, as design permits.",
      "With no soil or plant, run a very short supervised low-travel cycle behind a physical guard.",
      "Record travel in mm and stop-on-fault observations. Do not run if any stop test fails."
    ],
    "done": "Five guarded travel cycles stay within limits and all tested cutoffs stop power.",
    "stuck": "If motor strains, jams, heats or overshoots: cut power immediately; do not increase voltage.",
    "evidence": "Bench test video, travel log, approved wiring revision."
  },
  {
    "id": 52,
    "title": "Bring mechanism and camera together",
    "phase": 3,
    "win": "Demonstrate aiming does not equal cutting",
    "getReady": "Validated camera aiming, bench jig or approved rover tool, adult",
    "time": "35-60 minutes",
    "safety": "Adult present required",
    "steps": [
      "Put a harmless foam/printed target under the robot or stationary jig.",
      "Run vision until target center is stable; command only a visual READY indicator.",
      "Use an independent human enable control to authorize one guarded tool cycle; otherwise default to SKIP.",
      "Repeat 10 times at different target positions with no sharp soil contact.",
      "Log every false command, alignment error and stop; STOP at any uncontrolled cycle."
    ],
    "done": "All unapproved/uncertain targets remain inactive; approved safe trials logged.",
    "stuck": "Do not leave a powered tool connected during software debugging.",
    "evidence": "10-row integration test sheet and demo."
  },
  {
    "id": 53,
    "title": "Design the spring experiment before testing",
    "phase": 4,
    "win": "Freeze the study question and methods",
    "getReady": "Parent-approved safe field plot, written consent of property owner if not your own, notebook and no-tool test setup",
    "time": "30-50 minutes",
    "safety": "Adult present required",
    "steps": [
      "State ONE primary question: Does the careful targeting rule decrease incorrect tool engagements?",
      "Define the comparison methods and exactly what counts as false attempt, successful targeting, damaged turf and regrowth.",
      "Select testing sites/plots with naturally existing dandelions; do NOT seed weeds into a public lawn.",
      "Randomize order of policies across comparable cases and write measurements needed and how results will be blinded if possible.",
      "Have a parent or qualified mentor review the trial location, physical stop, boundaries and hazards. Run detection-only trials first; physical extraction follows its separate safety gate."
    ],
    "done": "Protocol exists with preset primary metric and no after-the-fact outcome changes.",
    "stuck": "If weather/season lacks enough weeds, do a defensible detection-only study and document limitations.",
    "evidence": "Student-written protocol, sampling plan and dated safety review notes."
  },
  {
    "id": 54,
    "title": "Conduct detection-only field trials",
    "phase": 4,
    "win": "Validate vision on real grass without cutting",
    "getReady": "Short dry level grass area, rover tool removed, parent",
    "time": "35-55 minutes",
    "safety": "Adult present required",
    "steps": [
      "Select 10 naturally occurring plants/negative turf patches and photograph each with an ID and ruler.",
      "Drive slowly by remote control in a marked safe area or use stationary camera if rover cannot navigate it.",
      "Run baseline and careful policy on identical saved frames; log each ACCEPT/SKIP and ground-truth identification.",
      "Record conditions (cloudy/sunny, camera height, grass length) and stop if rain or people/pets approach.",
      "Back up original photos before modifying code."
    ],
    "done": "At least 10 paired field cases collected with provenance.",
    "stuck": "Do not state the robot is fully autonomous if you are controlling drive manually.",
    "evidence": "Raw data, date/time, site diagram, full command log."
  },
  {
    "id": 55,
    "title": "Test physical removal only if safe and authorized",
    "phase": 4,
    "win": "Evaluate real weed roots and lawn disturbance",
    "getReady": "Approved powered bench setup OR manual tool, living test pots, adult",
    "time": "35-60 minutes",
    "safety": "Adult present required",
    "steps": [
      "Use potted established plants where possible first; note pot size and estimated plant maturity.",
      "Randomize equal-style plants among manual extraction methods; photograph before/after with scale.",
      "Measure root portion recovered (cm), number of attempts, disruption area and time.",
      "If a guarded powered attachment was approved, test only under the exact reviewed conditions; otherwise use the manual tool.",
      "Mark surviving specimens with IDs to track 14- and 28-day regrowth; observe without changing treatment."
    ],
    "done": "Every trial is logged, with zero uncontrolled tool activations.",
    "stuck": "Seedlings and loose nursery soil are not valid substitutes for mature embedded lawn taproots; label results pilot-only.",
    "evidence": "Root photos, measurements, species confirmation and safety log."
  },
  {
    "id": 56,
    "title": "Measure regrowth and repeat",
    "phase": 4,
    "win": "Find out whether weed removal lasted",
    "getReady": "Labeled treated plants or lawn patches, camera",
    "time": "20-30 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "At approximately day 14, photograph each labeled test plant/patch from same height and count regrowth.",
      "At approximately day 28, photograph again and repeat observation.",
      "Use SAME definition for regrowth throughout (new leaf from the treated plant location).",
      "Record unobserved/missing subjects separately; do not count missing as success.",
      "Calculate regrowth fraction for each method and note sample-size limitations."
    ],
    "done": "Two follow-up observations are saved or explicitly marked incomplete; no invented results.",
    "stuck": "If field conditions change, document soil, rain, mowing or disturbance events.",
    "evidence": "Before/after sequences and observation CSV."
  },
  {
    "id": 57,
    "title": "Plot the original contribution",
    "phase": 4,
    "win": "Make the actual engineering argument",
    "getReady": "Finished field/turf/AI tables, spreadsheet or Python",
    "time": "35-55 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Choose primary outcome defined before field testing (e.g., erroneous tool authorizations per 100 accepted targets).",
      "Build a table for baseline versus conservative policy on the same testing cases.",
      "Compute accepted target percentage, false accepts, misses and mean/maximum position error.",
      "Create one clean plot of false acceptance versus accepted coverage; add sample size and measurement units.",
      "In your own words write what result supports, what it cannot prove, and a surprising failure."
    ],
    "done": "One reproducible figure, table and honest three-paragraph interpretation.",
    "stuck": "If many results are zero, show raw counts and uncertainty rather than implying perfect performance.",
    "evidence": "Chart, calculation script or spreadsheet and discussion."
  },
  {
    "id": 58,
    "title": "Get independent technical feedback",
    "phase": 4,
    "win": "Put the design in front of an engineer",
    "getReady": "Teacher, engineering club leader or local mentor, student-owned demo",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Prepare a 2-minute demo and a one-page student-written summary of the test question and findings.",
      "Ask reviewer what the weakest experimental assumption is, not whether they 'like' the robot.",
      "Take five minutes of notes during feedback; do not let mentor write your report.",
      "Select ONE feasible improvement; document what you will change and why.",
      "Retest on NEW examples after modification, keeping old results unchanged."
    ],
    "done": "A dated review and one documented design iteration exist.",
    "stuck": "If no engineer is available, ask school STEM teacher or knowledgeable adult for critical feedback.",
    "evidence": "Reviewer role (with permission), observations, revised design."
  },
  {
    "id": 59,
    "title": "Build the portfolio",
    "phase": 4,
    "win": "Make accomplishments easy to verify",
    "getReady": "Student-owned photos, repo, video, graphs",
    "time": "30-60 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Pick 3 strong before/after images showing different stages of engineering, including a failure.",
      "Make one 60-90 second demo showing robot, target choice, stop/skip behavior and any approved mechanism action.",
      "Create a simple webpage or README with: problem, my role, design, testing, results, limits and next iteration.",
      "Link code and data you can legally share; remove private account details, house identifying views or personal metadata.",
      "Have parent read it once to check privacy; keep technical wording your own."
    ],
    "done": "A stranger can identify what student built and see quantitative results in less than 3 minutes.",
    "stuck": "An honest modest result with full experiment is stronger than unverified 99.9% claims.",
    "evidence": "Published portfolio URL or local HTML/README draft."
  },
  {
    "id": 60,
    "title": "Practice the engineer interview",
    "phase": 4,
    "win": "Explain work without scripts or exaggeration",
    "getReady": "Parent/teacher as interviewer, stopwatch",
    "time": "25-40 minutes",
    "safety": "Standard desk activity",
    "steps": [
      "Answer: Why this problem? What existed already? What did YOU change?",
      "Answer: What one measurement proved you were wrong? How did you fix the design?",
      "Explain why the cautious policy sometimes skips genuine weeds and what safety tradeoff it creates.",
      "Explain at least one Python function, one camera calibration and one mechanical design choice from memory.",
      "Rehearse a 90-second project description using your OWN words, then invite three skeptical follow-up questions."
    ],
    "done": "Can answer substantial technical questions without GPT or a parent speaking for him.",
    "stuck": "If stuck on code, open the file, explain it line-by-line to yourself and retry next session.",
    "evidence": "Video/self-evaluation checklist."
  }
];
