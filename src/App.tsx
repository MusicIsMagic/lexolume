import { useEffect, useMemo, useState } from 'react';
import { lexicon, lexiconById } from './data/lexicon';
import { emptyLog, loadState, localDate, markShown, pickWord, saveState } from './storage';
import type { AppState, Cadence, FieldNote } from './types';
import { Welcome } from './components/Welcome';
import { WordCard } from './components/WordCard';
import { Archive } from './components/Archive';

/** Make sure `state.today` points at a valid word chosen for today's date. */
function ensureToday(state: AppState): AppState {
  const date = localDate();
  if (state.today?.date === date && lexiconById[state.today.wordId]) return state;
  const word = pickWord(lexicon, state.logs, { seed: date, exclude: state.today?.wordId });
  return { ...state, today: { date, wordId: word.id }, logs: markShown(state.logs, word.id, date) };
}

export default function App() {
  const [state, setState] = useState<AppState>(() => ensureToday(loadState()));
  // A link ending in #<word-id> (e.g. #lexoduction) opens that word directly.
  const hashWord = () => {
    const id = decodeURIComponent(window.location.hash.slice(1)).toLowerCase();
    return lexiconById[id] ? id : null;
  };
  const [linkedId, setLinkedId] = useState<string | null>(hashWord);
  const isArchiveHash = () => window.location.hash === '#archive';
  const [showArchive, setShowArchive] = useState(isArchiveHash);
  const [entered, setEntered] = useState(() => hashWord() !== null || isArchiveHash());

  useEffect(() => {
    const onHash = () => {
      const id = hashWord();
      setLinkedId(id);
      setShowArchive(isArchiveHash());
      if (id || isArchiveHash()) setEntered(true);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const backToToday = () => {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    setLinkedId(null);
  };

  useEffect(() => saveState(state), [state]);

  // If the app stays open past midnight, roll over to a new day's word when it's next focused.
  useEffect(() => {
    const onFocus = () => setState((s) => ensureToday(s));
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  const word = lexiconById[linkedId ?? state.today!.wordId];
  const log = state.logs[word.id] ?? emptyLog(word.id);
  const resonantCount = useMemo(
    () => Object.values(state.logs).filter((l) => l.resonated && lexiconById[l.wordId]).length,
    [state.logs],
  );

  const setCadence = (cadence: Cadence) => setState((s) => ({ ...s, cadence }));

  const drawAnother = () => {
    if (linkedId) backToToday();
    setState((s) => {
      const date = localDate();
      const next = pickWord(lexicon, s.logs, { exclude: s.today?.wordId });
      return { ...s, today: { date, wordId: next.id }, logs: markShown(s.logs, next.id, date) };
    });
  };

  const updateLog = (fn: (l: typeof log) => typeof log) =>
    setState((s) => {
      const current = s.logs[word.id] ?? emptyLog(word.id);
      return { ...s, logs: { ...s.logs, [word.id]: { ...fn(current), updatedAt: new Date().toISOString() } } };
    });

  const toggleResonance = () => updateLog((l) => ({ ...l, resonated: !l.resonated }));

  const addNote = (text: string) =>
    updateLog((l) => {
      const note: FieldNote = {
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
        text,
        createdAt: new Date().toISOString(),
      };
      return { ...l, fieldNotes: [note, ...l.fieldNotes] };
    });

  const deleteNote = (noteId: string) =>
    updateLog((l) => ({ ...l, fieldNotes: l.fieldNotes.filter((n) => n.id !== noteId) }));

  if (!entered) {
    return <Welcome cadence={state.cadence} onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => setEntered(false)} aria-label="Back to welcome">
          Lexo<span>Lume</span>
        </button>
        <nav className="nav" aria-label="Sections">
          <a href="#" className={!showArchive ? 'on' : ''} onClick={(e) => { e.preventDefault(); backToToday(); setShowArchive(false); }}>
            Today
          </a>
          <a href="#archive" className={showArchive ? 'on' : ''}>
            Archive
          </a>
        </nav>
        <div className="cadence" role="radiogroup" aria-label="Cadence">
          {(['morning', 'evening'] as const).map((c) => (
            <button
              key={c}
              role="radio"
              aria-checked={state.cadence === c}
              className={state.cadence === c ? 'on' : ''}
              onClick={() => setCadence(c)}
            >
              {c === 'morning' ? 'Morning' : 'Evening'}
            </button>
          ))}
        </div>
      </header>

      {showArchive ? (
        <main>
          <Archive state={state} onReplaceState={(s) => setState(s)} />
        </main>
      ) : (
      <main className="today">
        {linkedId && (
          <p className="linked">
            You opened <strong>{word.word}</strong> from a direct link.{' '}
            <button className="text-btn" onClick={backToToday}>
              Back to today's word
            </button>
          </p>
        )}
        <p className="dateline">
          {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
          <span aria-hidden="true"> · </span>
          {state.cadence === 'morning' ? 'Setting the lens' : 'Looking back'}
        </p>

        <WordCard
          key={word.id}
          word={word}
          log={log}
          cadence={state.cadence}
          onToggleResonance={toggleResonance}
          onAddNote={addNote}
          onDeleteNote={deleteNote}
        />

        <section className="draw">
          <button className="draw-btn" onClick={drawAnother} disabled={lexicon.length < 2}>
            Draw another word
          </button>
          <p className="hint">For a moment that needs a different lens. Today's word is replaced with the new one.</p>
        </section>
      </main>
      )}

      <footer className="foot">
        {lexicon.length} words in the deck · {resonantCount} marked resonant · Saved on this device only
      </footer>
    </div>
  );
}
