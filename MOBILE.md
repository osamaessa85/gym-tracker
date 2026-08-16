# Mobile build (Capacitor)

The published GitHub Pages site continues to use the root `index.html`.
Capacitor receives a generated copy in `mobile-web/`, so its generated output
and native projects never affect the published website.

## One-time setup

1. Install Node.js 20 or newer and the Android Studio / Xcode requirements for
   the platform you intend to build.
2. Run `npm install`.
3. Run `npx cap add android` and/or `npx cap add ios`. The resulting
   `android/` and `ios/` directories stay on this branch.

## Sync and open native projects

- Android: `npm run mobile:android`
- iPhone: `npm run mobile:ios`

Both commands regenerate `mobile-web/index.html` from the root web app, then
sync it to the native project before opening the platform IDE.

## Supabase safety

This wrapper uses the existing web application's Supabase configuration
unchanged. Do not add a service-role key or any secret to the app. Before
releasing, confirm that Supabase Authentication permits the mobile app's
required sign-in flow and that row-level security for `app_data` remains
enabled.
