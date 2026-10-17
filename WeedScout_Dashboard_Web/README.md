# WeedScout Project Hub — web dashboard

**Ready-to-publish website** for your son's WeedScout engineering build. Version 1.2, October 2026. Includes all **60 sessions** extracted from the beginner workbook, broken into **300 small checklist actions**.

## What it tracks

- **Overview:** today's next session, 60-session progress, time invested, evidence-file count, five phases.
- **Focus Mode:** single-step walkthrough, check each action, troubleshooting hints, success test, notes, minutes and evidence filenames. A lesson cannot be marked done until all actions have been checked.
- **Engineering notebook:** dated experiments, blockers, improvements and decisions (student-authored).
- **Experiments:** baseline vs cautious targeting; counts of test opportunities, wrong actions and skipped actions; graphs only reflect entered measurements.
- **Parts & budget:** planned, purchased and tested components; only actual prices count.
- **College portfolio:** checklist for technical demonstration, code, before/after test results, attribution and privacy.
- **Backups:** portable JSON progress export/import and CSV notebook/experiment export.
- **Optional cloud sync:** Google sign-in with Firebase Authentication + private Firestore documents. The site works without Firebase.

**Privacy:** all progress is stored in this browser's local storage **unless** optional Firebase is configured and the student signs in. Files, photos, and videos themselves are NOT uploaded to the dashboard; its Evidence field stores only filenames. Do not place personal journals in the public website repository.

## Option A — try it on the computer immediately

1. Unzip `WeedScout_Dashboard_Web.zip`.
2. Double-click `index.html` to open in Chrome or Edge. The dashboard will work without internet once opened, except for optional Firebase sign-in.
3. Click **My 60 sessions**, open **Session 01**. Complete one action, check it, and choose **Next step**.
4. Use **Backups & sync → Download complete JSON backup** at least weekly.

If the browser restricts local-file storage, run a local web server instead:

```powershell
cd "$HOME\Downloads\WeedScout_Dashboard_Web"
py -3.11 -m http.server 8000
```

Open `http://localhost:8000/`. If the ZIP was extracted elsewhere, use that actual directory. Python must already be installed. This is only a local preview; it does not create a public website.

## Option B — put it on the web (recommended)

Publish with **GitHub Pages**; no build tools or server are required:

1. Sign in or register at https://github.com/ using a student/parent-controlled account.
2. Create a **new public** repository named `weedscout-dashboard`. Public GitHub Pages sites are viewable by anyone who knows the URL. The repository should contain **only the web application files**, never private experiment logs.
3. Use **Add file → Upload files**, and upload `index.html`, `app.js`, `styles.css`, `lessons.js`, `cloud-sync.js`, `firebase-config.js`, `firestore.rules`, `README.md` and `.nojekyll`. The `.nojekyll` file is optional for this no-build app.
4. Click **Commit changes**.
5. Open repository **Settings → Pages → Build and deployment → Source: Deploy from a branch → main → /(root) → Save**.
6. Open `https://YOUR-GITHUB-USERNAME.github.io/weedscout-dashboard/` (substitute the actual username).
7. Bookmark that address on the student's phone and laptop.

**Critical limitation:** GitHub Pages hosts the web *app*, not a database. Without the optional sync steps below, the student's checked boxes and journal entries stay only in the browser/device where they were entered. Save JSON backups and import when switching devices.

Official hosting docs: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Option C — genuinely synced progress across devices (optional, recommended after initial use)

Requires setting up a Google/Firebase project, which may require a parent to handle account creation. Not included/activated by default. Do this only once the family is comfortable with authentication and security rules.

1. Visit https://console.firebase.google.com/ and **create a Firebase project**.
2. Under **Project settings → Your apps**, add a **Web app**, and copy the public *web configuration object* (`apiKey`, `authDomain`, `projectId`, `appId` etc.). **NEVER copy a service-account private key or admin credentials into this website.** Firebase web config identifiers are public by design; Firestore **security rules** protect data.
3. Under **Authentication → Sign-in method**, enable **Google** provider and complete any required project support email. Under **Authentication → Settings → Authorized domains**, add `YOUR-GITHUB-USERNAME.github.io` (domain only, without protocol or path). Exact console labels can change.
4. Under **Firestore Database**, create the database in production/locked mode (not an open test mode). In **Firestore → Rules**, replace the rules with `firestore.rules` supplied here, and **Publish**. The rules permit reading/writing only `/profiles/{signed-in-user-uid}`. No signed-out access is permitted.
5. Edit `firebase-config.js` in the public GitHub repository, replacing `null` with the JSON-like Firebase web configuration object:

   ```js
   window.WEEDSCOUT_FIREBASE_CONFIG = {
     apiKey: "YOUR_PUBLIC_WEB_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT",
     appId: "YOUR_APP_ID"
   };
   ```

   Copy exactly the values Firebase provides; some projects also include `storageBucket`, `messagingSenderId`, `measurementId`.
6. Refresh your published dashboard, choose **Backups & sync → Sign in with Google**. Use the **same Google account on each device**. On first connection, the page will check whether there is existing cloud data before deciding what to do.
7. Test a single harmless journal entry on laptop; load the dashboard on phone, sign into the same Google account, and check whether the entry arrives. Then export a JSON backup.

**IMPORTANT synchronization design note:** this edition uses latest-saved-state rather than full conflict-free multi-user collaboration. If two devices edit at the same time, the later upload may overwrite the earlier one. Avoid simultaneous edits, reload before switching devices, and keep the JSON backup. Google sign-in only gives access to the signed-in account's own project—not both parent and child automatically. Do not use the app for health or sensitive personal records. Firestore pricing and usage plans may change; check the current Firebase console before enabling billing.

Official Firebase docs:
- https://firebase.google.com/docs/web/setup
- https://firebase.google.com/docs/auth/web/start
- https://firebase.google.com/docs/firestore/security/get-started

## Safety + data integrity

This is a tracker/learning app; it **does not control any physical motors, blades or extractors**. The curriculum requires a supervised stop mechanism and a separate power-isolation review before any powered tool work. The sample target code is not a validated real-weed classifier. The experiment dashboard does not pretend that unentered results exist. Students must record actual trials, retain failures, and explain all assistance. No third-party awards or external deadlines are required.

## Updating the 60 sessions

Lesson text is contained in `lessons.js` and derived from the Markdown workbook. Edit lesson instructions there only when necessary. Never store student progress in that file. Changes to hosted lesson files do not intentionally change saved completion records, because progress is separately keyed by session number.

## Troubleshooting

- **Site is blank:** Confirm all `.js`, `.css`, and `index.html` files are next to each other, not nested in an extra folder; open browser Console (F12) for errors.
- **Not seeing progress on another device:** In local-only mode that's expected. Use JSON export/import or configure Firebase sync.
- **Sign-in popup blocked:** Permit popups for your published page; verify Firebase authorized domains and Google provider enabled. Use `https://`, not `file://`, for cloud sign-in.
- **Firestore permission denied:** Check that restrictive rules are published, the same Google account is used, and Firestore database is provisioned.
- **Lost data:** First look for downloaded `weedscout-progress-YYYY-MM-DD.json` and restore through the dashboard. We cannot recover unsynced browser storage remotely.
- **New deployment not appearing:** In GitHub check Settings → Pages and Actions for the publication status, then hard-refresh the browser.
