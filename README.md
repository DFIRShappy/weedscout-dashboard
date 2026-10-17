# WeedScout Engineering Dashboard

This is the source for the WeedScout beginner engineering dashboard, including 60 guided sessions, an engineering notebook, experiments, budgeting, and portfolio tracking.

## First-time site setup

The dashboard source files **index.html**, **cloud-sync.js**, **firebase-config.js**, **firestore.rules**, and **.nojekyll** have already been committed. To complete the deployment, upload these three missing files from the download archive:

- `app.js`
- `lessons.js`
- `styles.css`

Download the prepared web archive from your ChatGPT conversation, extract it, and in this GitHub repository choose **Add file → Upload files**. Upload those three files into the repository root (not an inner directory), then **Commit changes**.

Then enable GitHub Pages in **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.

The expected public URL is https://dfirshappy.github.io/weedscout-dashboard/ once Pages finishes publishing.

## Cloud sync (not active until Firebase is configured)

The default Firebase configuration is `null`, so local device progress works but does **not** synchronize across computers.

1. In Firebase console, create a Web app in the project.
2. In **Authentication → Sign-in method**, enable Google. Add `dfirshappy.github.io` under **Authentication → Settings → Authorized domains**.
3. In **Firestore Database**, create a database in **production/locked mode**, and publish the restrictive access rules from `firestore.rules`. Do not enable open test rules.
4. Copy the Firebase **public web app configuration** into `firebase-config.js` in place of `null`. NEVER add a service-account private key or admin credential.
5. Sign into the dashboard with the **same Google account** on each device. Test saving a journal entry, then reading it from another browser/device.

The sync implementation uses a latest-save document and is intended for one device at a time. Avoid simultaneous editing on two devices and export JSON progress backups regularly.

## Privacy and safety

Website source files are public on GitHub; student journals and research notes belong only in the private browser storage / protected Firebase account. The dashboard does **not** upload evidence photos and videos: it tracks their filenames. It does not directly control any robot hardware.

