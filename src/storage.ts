import type { AppState, Cadence, UserLog, WordEntry } from './types';

const KEY = 'lexolume:v1';

export function localDate(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function defaultCadence(d = new Date()): Cadence {
  return d.getHours() < 15 ? 'morning' : 'evening';
}

export function loadState(): AppState {
  const fallback: AppState = { version: 1, cadence: defaultCadence(), today: null, logs: {} };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as AppState;
    if (parsed?.version !== 1 || typeof parsed.logs !== 'object') return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable (private mode, blocked site data). The app still works for this session.
  }
}

export function emptyLog(wordId: string): UserLog {
  return { wordId, datesShown: [], resonated: false, fieldNotes: [], updatedAt: new Date().toISOString() };
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Pick a word, favouring the ones shown least often so a small deck cycles evenly
 * before anything repeats. `seed` makes the daily pick stable for a given date.
 */
export function pickWord(
  words: WordEntry[],
  logs: Record<string, UserLog>,
  opts: { seed?: string; exclude?: string } = {},
): WordEntry {
  const pool = words.length > 1 && opts.exclude ? words.filter((w) => w.id !== opts.exclude) : words;
  const timesShown = (w: WordEntry) => logs[w.id]?.datesShown.length ?? 0;
  const fewest = Math.min(...pool.map(timesShown));
  const candidates = pool.filter((w) => timesShown(w) === fewest);
  const index = opts.seed
    ? hash(opts.seed) % candidates.length
    : Math.floor(Math.random() * candidates.length);
  return candidates[index];
}

/** Record that a word was shown on a date (once per date). */
export function markShown(logs: Record<string, UserLog>, wordId: string, date: string): Record<string, UserLog> {
  const log = logs[wordId] ?? emptyLog(wordId);
  if (log.datesShown.includes(date)) return logs;
  return {
    ...logs,
    [wordId]: { ...log, datesShown: [...log.datesShown, date], updatedAt: new Date().toISOString() },
  };
}
