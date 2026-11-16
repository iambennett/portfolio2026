# Deploying to GoDaddy (Node.js hosting)

This app is a server-rendered Node application. It must run as a Node process on GoDaddy. It cannot run from a static `public_html` upload.

## 1. Build locally

```sh
pnpm install
pnpm build
```

The build writes the server bundle to `.output/`. Its entry point is `.output/server/index.mjs`.

## 2. Create a hosted PostgreSQL database

The local default is a PGlite file in `data/pglite`. That file should not be relied on in production. Create a PostgreSQL database with a provider such as Neon or Supabase, and copy its connection string. Keep it out of the repo.

## 3. Set up the Node.js app in cPanel

In cPanel, open **Setup Node.js App** and create an application with:

- **Node.js version:** 22 (choose the highest 22.x offered, or the closest available version; confirm it is available on your plan)
- **Application mode:** Production
- **Application root:** the folder you uploaded to, for example `portfolio`
- **Application startup file:** `.output/server/index.mjs`
- **Application URL:** your domain

## 4. Upload the build

Upload these to the application root:

- `.output/` (the whole folder)
- `package.json`
- `pnpm-lock.yaml`

Then run the install command from the cPanel Node.js panel, or from its terminal if your plan provides one:

```sh
npm install --omit=dev
```

Native dependencies (including `node-pty`) need to install on the GoDaddy server. If the install fails there, the cause is usually a native-module build error. Contact GoDaddy support or move to a VPS.

## 5. Environment variables

Set these in the cPanel Node.js App environment settings. Do not commit real values.

| Variable | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `PORT` | Provided by cPanel (leave as is) |
| `BETTER_AUTH_SECRET` | A long random string, unique to production |
| `DATABASE_URL` | Your hosted PostgreSQL connection string |
| `AUTH_DISABLED` | Do not set this. It must not be `true` in production. |

Generate a secret locally with:

```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 6. Start and verify

Restart the app from the cPanel panel, then check:

- `/` loads the homepage without a login.
- `/work` and `/resume` load without a login.
- A project page such as `/work/<slug>` loads without a login.
- `/api/anything` returns 401 without a session, which confirms the API is protected.

## Known limitations

- **Client-rendered content.** Page content is rendered by JavaScript in the browser. The server HTML is a loading shell, so search engines and clients without JavaScript will not see the portfolio text. Prerendering or full SSR would be needed to fix this.
- **Public routes.** Only `/`, `/work`, and `/resume` are listed in `publicPaths` in `server/plugins/auth.ts`. Confirm that project detail pages (`/work/<slug>`) load without login before launch, and add them to `publicPaths` if they do not.
- **Local preview data.** Content editing and the chat features rely on the database. Use a persistent `DATABASE_URL` in production.

## Updating the site

After code changes: run `pnpm build`, upload the new `.output/` folder, and restart the app from cPanel.
