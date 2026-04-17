
# Giradi Oil Frontend

Vite-Frontend fuer den Store inklusive Vercel Functions unter api/.

## Lokal starten

Voraussetzungen:

- Node.js 18+
- npm

Installation und Start:

```bash
npm ci
npm run dev
```

Produktions-Build:

```bash
npm run build
```

## Wichtige Integrationen

- Medusa Backend ueber Vite-Umgebungsvariablen
- Vercel Functions in api/
- Google Sheets / Google Service Account
- SMTP fuer Formular- und Bestellmails
- Storyblok Management API
- ImageKit Sync

## Environment Variables

Eine Vorlage liegt in .env.example.

Frontend:

- VITE_MEDUSA_BACKEND_URL
- VITE_MEDUSA_PUBLISHABLE_KEY
- VITE_STORYBLOK_TOKEN

Server / Vercel Functions:

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

Optional fuer lokales Seeding-Script:

- STORYBLOK_MGMT_TOKEN

## GitHub- und Vercel-Umzug

Die konkreten Schritte stehen in docs/migration-vercel-github.md.
  