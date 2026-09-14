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
git clone https://github.com/abdullahguch/obscura.git
cd obscura
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

## Scripts

| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the docs site                  |
| `npm run build` | Static export into `out/`            |
| `npm run start` | Preview the exported site locally    |
| `npm run lint`  | ESLint                               |

## License

MIT
