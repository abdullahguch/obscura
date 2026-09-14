# Obscura

A React component library developed in the darkroom.

Not another zinc-and-radius kit. Obscura is **39 primitives** with fiber-paper surfaces, letterpress shadows, catalog type, and a single amber safelight for signal. The component types will feel familiar (buttons, dialogs, tables). The design will not.

You copy the source into your project. You own every line.

## Stack

- React 19 + Next.js (docs site)
- TypeScript
- Tailwind CSS v4
- No Radix, no Headless UI — accessible HTML written in this repo

## Run the site

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Use the library

1. Copy `src/library` into your app.
2. Copy the CSS tokens from `src/app/globals.css` (`:root`, `.dark`, `@theme inline`).
3. Install helpers:

```bash
npm install clsx tailwind-merge class-variance-authority
```

```tsx
import { Button } from "@/library";

export function Proof() {
  return <Button variant="lamp">Expose</Button>;
}
```

## Theming

Studio light and darkroom are CSS variables. Edit `--paper`, `--ink`, `--safelight`, `--stamp` to restyle the whole kit. See `/docs/theming` on the site.

## Repository layout

```
src/library/          ← the component library (copy this)
src/app/              ← marketing + docs site
src/site/             ← website chrome, registry, demos
```

## Deploy (Hestia)

The site is a static export. `npm run build` writes HTML/CSS/JS to `out/`. Upload that folder’s contents to the subdomain’s `public_html`.

1. Point DNS: `A` record `obscura` → your VPS IP.
2. In Hestia: **Web → Add Web Domain** → `obscura.abdullahguc.com`.
3. Enable **SSL / Let’s Encrypt** after DNS has propagated.
4. Build and upload:

```bash
npm run build
rsync -avz --delete --exclude '.well-known' out/ USER@YOUR_VPS:/home/USER/web/obscura.abdullahguc.com/public_html/
```

Replace `USER` with the Hestia account that owns the domain.

## Scripts

| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the docs site                  |
| `npm run build` | Static export into `out/`            |
| `npm run start` | Preview the exported site locally    |
| `npm run lint`  | ESLint                               |

## License

MIT
