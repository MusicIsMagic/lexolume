# LexoLume

> We are the words we think.

One word a day, held as a lens. Phase 1 of the LexoLume build: welcome screen, Today word card
(lens, shadow, lucidity check, field prompt), Morning/Evening cadence, "Draw another word", and
resonance marks plus a dated field log saved in the browser's local storage.

## Archive and your data

Open **Archive** (or `#archive`) to search all words, their definitions, lenses, shadows, tags, and your own
notes, and to filter by coined, existing, resonant, has notes, or paired words. Every card also lists its
connected words (its shadow and related words), defined in `src/data/pairs.ts`.

The **Your data** panel exports a JSON backup or a Markdown journal, and imports a JSON backup. Importing merges:
notes are combined, resonance is kept, and nothing already in the browser is removed.

## Install on a phone

Once deployed, LexoLume lives at `https://musicismagic.github.io/lexolume/`.

- **iPhone (Safari):** open the link, tap **Share**, then **Add to Home Screen**.
- **Android (Chrome):** open the link, then tap **Install app** (or the menu's **Add to Home screen**).

It opens full-screen with its own icon and works offline after the first visit. Notes stay on each device;
use the Archive's export and import to move them.

**Deploys** run automatically on every push to `main` (`.github/workflows/deploy.yml`). One-time setup:
in the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.

## Run it

Needs Node 18 or newer.

```bash
npm install
npm run dev        # open the printed http://localhost:5173 link
```

Other scripts:

- `npm run build` builds a normal static site into `dist/`.
- `npm run build:single` builds one self-contained `dist-single/index.html` you can open or host anywhere.

## Adding words

All words live in `src/data/lexicon.ts`. Copy an entry, give it a new unique `id`, and fill in the fields
(the `WordEntry` type in `src/types.ts` documents each one). `shadowNuanceNote` is optional and shows as
the "Lucidity check" box. Don't change an existing `id`, because your notes are keyed to it.

## How the daily word is picked

Each day picks from the words shown the fewest times, so a small deck cycles through every word before any
repeats. "Draw another word" replaces today's word with another least-shown word.

## Your data

Everything is stored under the `lexolume:v1` key in this browser's local storage. Nothing leaves the device.
Use the Archive's export to back it up.
