# LexoLume

> We are the words we think.

One word a day, held as a lens. Phase 1 of the LexoLume build: welcome screen, Today word card
(lens, shadow, lucidity check, field prompt), Morning/Evening cadence, "Draw another word", and
resonance marks plus a dated field log saved in the browser's local storage.

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
JSON and Markdown export are planned for Phase 2.
