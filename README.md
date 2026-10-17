# WeedScout Engineering Dashboard

The working website files have now been placed in the **repository root**:

- `index.html`
- `app.js`
- `lessons.js`
- `styles.css`
- `cloud-sync.js`
- `firebase-config.js`
- `firestore.rules`
- `.nojekyll`

The old `WeedScout_Dashboard_Web/` directory contains an uploaded duplicate, which is not used by GitHub Pages. **Do not set Pages to deploy from that subfolder.**

## Publish the site

Open **Settings → Pages**, and under **Build and deployment**, choose **Deploy from a branch** with branch `main` and folder `/(root)`. Click **Save**. Wait for the deployment to finish. Your URL should be:

https://dfirshappy.github.io/weedscout-dashboard/

The page will work in *local-only mode* before Firebase is configured. In local-only mode, browser progress is **not synced between devices**.

## Enable private cross-device sync

1. In [Firebase Console](https://console.firebase.google.com/), open the WeedScout project.
2. In **Project Overview**, add a **Web app** (the `</>` icon) and register it. Firebase Hosting is not needed because GitHub Pages hosts the frontend.
3. Go to **Authentication → Sign-in method**, enable the **Google** provider. Go to Authentication settings and add `dfirshappy.github.io` as an **Authorized domain**.
4. Go to **Firestore Database**; create the database in locked/production mode. Under **Rules**, replace the contents with the exact rules in the repository's `firestore.rules` file, then publish those rules. Do not use public/open test rules.
5. Copy the **public Web App firebaseConfig** object into the root `firebase-config.js` file, replacing the value `null`. This is client-side Firebase app configuration, not a secret. Never put passwords, service-account files, private keys or administrator credentials into GitHub.
6. After deployment, the student can sign in with their Google account from different devices. Check by creating a journal note on one device and reading it on another device.

### Important sync behavior

The current implementation uploads a single latest-state document per signed-in account. It is intended for **one device editing at a time**, not simultaneous collaborative editing. Keep JSON backups before replacing progress or making major changes. Progress is private to that Google login: someone using a different Google account starts with a separate workspace.

## What this app does

- 60 beginner-friendly guided lessons
- Lab notebook
- Experiments and metrics
- Parts/budget tracking
- College application portfolio checklist
- Optional cloud synchronization

The dashboard is not robot-control firmware. It does not itself upload photographs or videos to cloud storage.
