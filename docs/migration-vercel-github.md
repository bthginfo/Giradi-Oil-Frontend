# Migration auf neues GitHub und neues Vercel

## 1. Neues GitHub-Repository verbinden

Aktuell zeigt origin noch auf das alte Repository.

Pruefen:

```bash
git remote -v
```

Auf neues Repo umstellen:

```bash
git remote set-url origin https://github.com/DEIN-OWNER/DEIN-NEUES-REPO.git
```

Falls das neue Repo noch leer ist:

```bash
git add .
git commit -m "Initial import of storefront frontend"
git push -u origin main
```

## 2. Neues Vercel-Projekt anlegen

- Neues Projekt in Vercel aus dem neuen GitHub-Repo importieren
- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist

Die vorhandene Datei vercel.json ist bereits passend fuer den Build und das SPA-Rewriting konfiguriert.

## 3. Environment Variables in Vercel setzen

Frontend:

- VITE_MEDUSA_BACKEND_URL
- VITE_MEDUSA_PUBLISHABLE_KEY
- VITE_STORYBLOK_TOKEN

Server / Functions:

- ADMIN_PASSWORD
- GOOGLE_SERVICE_ACCOUNT_EMAIL
- GOOGLE_SERVICE_ACCOUNT_KEY
- GOOGLE_SHEET_ID
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- SYNC_SECRET
- IMAGEKIT_PRIVATE_KEY
- STORYBLOK_MANAGEMENT_TOKEN
- STORYBLOK_SPACE_ID

Optional nur lokal:

- STORYBLOK_MGMT_TOKEN

## 4. Bekannte Besonderheiten

- VITE_MEDUSA_BACKEND_URL und VITE_MEDUSA_PUBLISHABLE_KEY haben im Code Fallback-Werte. Fuer den echten Umzug trotzdem explizit in Vercel setzen.
- GOOGLE_SERVICE_ACCOUNT_KEY muss in Vercel als kompletter Private Key hinterlegt werden.
- Das Projekt enthaelt Vercel Functions unter api/. Diese benoetigen die Server-Variablen auch in Preview/Production, nicht nur lokal.
- Das lokale Script scripts/seed-storyblok-pages.mjs erwartet STORYBLOK_MGMT_TOKEN. Dafuer kannst du lokal denselben Wert wie STORYBLOK_MANAGEMENT_TOKEN verwenden.

## 5. Verifikation nach dem Umzug

```bash
npm ci
npm run build
```

Danach in Vercel pruefen:

- Frontend laedt
- Produktdaten / Backend-Verbindung funktionieren
- Formulare und Mailversand funktionieren
- Google-Sheets-basierte Endpunkte antworten
- Sync-Endpunkt ist nur mit Secret/Admin-Passwort erreichbar