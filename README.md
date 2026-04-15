## Uno Vue Admin Dashboard — Lite (Open‑Core)

This repository contains the **Lite** open-core release of the Uno Vue Admin Dashboard.
It includes a small set of fully working core pages and keeps the rest of the premium modules visible in the sidebar as **PRO** “ghost links” (they open an upgrade modal instead of navigating).

### Links (fill these in)

- **Repository (GitHub)**: `https://github.com/ShuvaMallickPro/uno-vue-admin-dashboard-lite.git`
- **Lite product page**: `<YOUR_LITE_PRODUCT_URL_HERE>`
- **Premium (PRO) product page**: `https://www.templatemonster.com/admin-templates/uno-vue-admin-dashboard-template-with-vite-amp-typescript-477158.html`
- **Live demo (optional)**: `#`

## What’s included in Lite (Core pages)

- **Dashboard**: Course Dashboard (`/course`)
- **Users**: User listing + filters + data table (`/users`)
- **Users Profile**: Profile overview (`/users/profile`)
- **Auth / System pages**:
  - Login (`/login`)
  - Register (`/register`)
  - Forget password (`/forget-password`)
  - Verify email (`/verification`)
  - Server error (`/server-error`)
  - Maintenance (`/maintenance`)
  - Not Found (`/:pathMatch(.*)*`)

## What’s locked (PRO modules)

Premium modules are **still visible** in navigation, but they are locked:

- Clicking them opens a **Premium modal** (no navigation).
- This lets users explore the structure without giving away premium implementation.

Common locked examples:

- Additional dashboards (Analytics/Finance/Sales/Career)
- Products, Orders, Invoices
- Support modules
- Settings modules
- Apps (e.g. Kanban)

## How PRO “ghost links” work

- **Navigation data**: `src/data/navigation.ts` uses `isPro: true` for locked items.
- **Sidebar renderer**: renders locked items as `<button>` and calls `premium.open(label)`.
- **Modal + state**:
  - Store: `src/stores/premium.ts`
  - UI: `src/components/premium/PremiumModal.vue`
  - Badge: `src/components/premium/ProBadge.vue`
  - Mounted once in: `src/layout/DefaultLayout.vue`

## Tech stack

- Vue 3 + Vite + TypeScript
- Pinia
- Tailwind CSS
- shadcn-vue components

## Project setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production build

```sh
npm run build
```

## License

This Lite repository is intended for public distribution.  
If you are publishing it, ensure your chosen license text matches your distribution terms (MIT/Commercial/etc.).
