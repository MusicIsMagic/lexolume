import { useMemo, useRef, useState } from 'react';
import { lexicon } from '../data/lexicon';
import { connectionsFor, pairedIds } from '../data/pairs';
import { mergeImport, toJSON, toMarkdown } from '../lib/exportImport';
import type { AppState } from '../types';

type Filter = 'all' | 'coined' | 'existing' | 'resonant' | 'notes' | 'pairs';

const filters: Array<[Filter, string]> = [
  ['all', 'All'],
  ['coined', 'Coined'],
  ['existing', 'Existing'],
  ['resonant', 'Resonant'],
  ['notes', 'Has my notes'],
  ['pairs', 'Pairs'],
];

interface Props {
  state: AppState;
  onReplaceState: (s: AppState) => void;
}

export function Archive({ state, onReplaceState }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [exportKind, setExportKind] = useState<'json' | 'md' | null>(null);
  const [importMsg, setImportMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lexicon.filter((w) => {
      const log = state.logs[w.id];
      if (filter === 'coined' && w.originType !== 'coined') return false;
      if (filter === 'existing' && w.originType !== 'existing') return false;
      if (filter === 'resonant' && !log?.resonated) return false;
      if (filter === 'notes' && !log?.fieldNotes.length) return false;
      if (filter === 'pairs' && !pairedIds.has(w.id)) return false;
      if (!q) return true;
      const haystack = [
        w.word,
        w.definition,
        w.perceptualLens,
        w.shadowState,
        w.etymologyOrRoots,
        w.tags.join(' '),
        ...(log?.fieldNotes.map((n) => n.text) ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, filter, state.logs]);

  const sorted = useMemo(() => [...results].sort((a, b) => a.word.localeCompare(b.word)), [results]);
  const exportText = exportKind === 'json' ? toJSON(state) : exportKind === 'md' ? toMarkdown(state) : '';

  const download = () => {
    const blob = new Blob([exportText], { type: exportKind === 'json' ? 'application/json' : 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lexolume-${new Date().toISOString().slice(0, 10)}.${exportKind === 'json' ? 'json' : 'md'}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.getElementById('export-text') as HTMLTextAreaElement | null;
      el?.select();
    }
  };

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    try {
      const { state: merged, words, notes } = mergeImport(state, await file.text());
      onReplaceState(merged);
      setImportMsg({ ok: true, text: `Imported ${notes} note${notes === 1 ? '' : 's'} across ${words} word${words === 1 ? '' : 's'}. Nothing already here was removed.` });
    } catch (e) {
      setImportMsg({ ok: false, text: e instanceof Error && e.message.includes('LexoLume') ? e.message : 'That file could not be read. Choose a .json file exported from LexoLume.' });
    }
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <div className="archive">
      <div className="archive-head">
        <h1>Archive</h1>
        <p className="hint">
          All {lexicon.length} words. Search covers definitions, lenses, shadows, tags, and your own notes.
        </p>
      </div>

      <label htmlFor="archive-search" className="sr-only">
        Search words and notes
      </label>
      <input
        id="archive-search"
        className="search"
        type="search"
        placeholder="Search words, ideas, or your notes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="chips" role="radiogroup" aria-label="Filter">
        {filters.map(([key, label]) => (
          <button
            key={key}
            role="radio"
            aria-checked={filter === key}
            className={filter === key ? 'chip on' : 'chip'}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="count">
        {sorted.length} {sorted.length === 1 ? 'word' : 'words'}
      </p>

      {sorted.length === 0 ? (
        <p className="empty">No words match. Try a different search or filter.</p>
      ) : (
        <ul className="word-list">
          {sorted.map((w) => {
            const log = state.logs[w.id];
            const notes = log?.fieldNotes.length ?? 0;
            const links = filter === 'pairs' ? connectionsFor(w.id) : [];
            return (
              <li key={w.id}>
                <a href={`#${w.id}`} className="word-row">
                  <span className="row-top">
                    <span className="row-word">{w.word}</span>
                    <span className="badges">
                      {w.originType === 'coined' && <span className="badge coined">Coined</span>}
                      {log?.resonated && <span className="badge resonant">Resonant</span>}
                      {notes > 0 && (
                        <span className="badge">
                          {notes} {notes === 1 ? 'note' : 'notes'}
                        </span>
                      )}
                      {!log?.datesShown.length && <span className="badge quiet">Not yet drawn</span>}
                    </span>
                  </span>
                  <span className="row-def">{w.definition}</span>
                  {links.length > 0 && (
                    <span className="row-links">
                      {links.map((c) => `${c.label}: ${lexicon.find((x) => x.id === c.id)?.word}`).join(' · ')}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      )}

      <section className="data-panel" aria-labelledby="data-heading">
        <h2 id="data-heading">Your data</h2>
        <p className="hint">
          Your resonance marks and notes live only in this browser. Export a backup now and then, and import it on
          another device or browser to bring everything with you.
        </p>
        <div className="data-actions">
          <button onClick={() => setExportKind(exportKind === 'json' ? null : 'json')} aria-pressed={exportKind === 'json'}>
            Export JSON backup
          </button>
          <button onClick={() => setExportKind(exportKind === 'md' ? null : 'md')} aria-pressed={exportKind === 'md'}>
            Export Markdown journal
          </button>
          <button onClick={() => fileRef.current?.click()}>Import JSON backup</button>
          <input
            ref={fileRef}
            id="import-file"
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => onFile(e.target.files?.[0])}
          />
        </div>
        {importMsg && <p className={importMsg.ok ? 'notice ok' : 'notice err'}>{importMsg.text}</p>}
        {exportKind && (
          <div className="export-box">
            <div className="export-actions">
              <button onClick={download}>Download file</button>
              <button onClick={copy}>{copied ? 'Copied' : 'Copy text'}</button>
            </div>
            <label htmlFor="export-text" className="sr-only">
              Export contents
            </label>
            <textarea id="export-text" readOnly rows={10} value={exportText} />
          </div>
        )}
      </section>
    </div>
  );
}
