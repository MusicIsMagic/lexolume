import { lexicon, lexiconById } from '../data/lexicon';
import type { AppState, UserLog } from '../types';

export function toJSON(state: AppState): string {
  return JSON.stringify(
    { app: 'LexoLume', exportedAt: new Date().toISOString(), version: state.version, cadence: state.cadence, logs: state.logs },
    null,
    2,
  );
}

export function toMarkdown(state: AppState): string {
  const lines: string[] = ['# LexoLume field journal', '', `_Exported ${new Date().toLocaleString()}_`, ''];
  const logs = Object.values(state.logs).filter(
    (l) => lexiconById[l.wordId] && (l.resonated || l.fieldNotes.length > 0),
  );
  if (logs.length === 0) lines.push('No resonant words or field notes yet.');
  const ordered = lexicon.filter((w) => logs.some((l) => l.wordId === w.id));
  for (const w of ordered) {
    const log = state.logs[w.id];
    lines.push(`## ${w.word}${log.resonated ? ' ✦' : ''}`, '', `*${w.pronunciation}* · ${w.originType === 'coined' ? 'Coined' : 'Existing'}`, '', `> ${w.definition}`, '');
    if (log.resonated) lines.push('Marked resonant.', '');
    for (const n of [...log.fieldNotes].sort((a, b) => a.createdAt.localeCompare(b.createdAt))) {
      lines.push(`- **${new Date(n.createdAt).toLocaleDateString()}:** ${n.text.replace(/\n/g, ' ')}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

/**
 * Merge an exported JSON backup into the current state. Nothing is lost: notes are united by id,
 * resonance stays on if either side has it, and shown dates are combined.
 */
export function mergeImport(state: AppState, raw: string): { state: AppState; words: number; notes: number } {
  const parsed = JSON.parse(raw) as { app?: string; logs?: Record<string, UserLog> };
  if (parsed.app !== 'LexoLume' || typeof parsed.logs !== 'object' || parsed.logs === null) {
    throw new Error('This file is not a LexoLume JSON export.');
  }
  const logs = { ...state.logs };
  let words = 0;
  let notes = 0;
  for (const [id, incoming] of Object.entries(parsed.logs)) {
    if (!incoming || !Array.isArray(incoming.fieldNotes) || !Array.isArray(incoming.datesShown)) continue;
    const current = logs[id];
    const known = new Set(current?.fieldNotes.map((n) => n.id) ?? []);
    const newNotes = incoming.fieldNotes.filter((n) => n && typeof n.text === 'string' && !known.has(n.id));
    notes += newNotes.length;
    words += 1;
    logs[id] = {
      wordId: id,
      datesShown: [...new Set([...(current?.datesShown ?? []), ...incoming.datesShown])].sort(),
      resonated: Boolean(current?.resonated || incoming.resonated),
      fieldNotes: [...(current?.fieldNotes ?? []), ...newNotes].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
      updatedAt: new Date().toISOString(),
    };
  }
  return { state: { ...state, logs }, words, notes };
}
