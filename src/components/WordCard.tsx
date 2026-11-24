import { useState } from 'react';
import { connectionsFor } from '../data/pairs';
import { lexiconById } from '../data/lexicon';
import type { Cadence, UserLog, WordEntry, WordExample } from '../types';

interface Props {
  word: WordEntry;
  log: UserLog;
  cadence: Cadence;
  onToggleResonance: () => void;
  onAddNote: (text: string) => void;
  onDeleteNote: (id: string) => void;
}

const contextLabel: Record<WordExample['context'], string> = {
  work: 'At work',
  relationships: 'With others',
  solitude: 'On your own',
  body: 'In the body',
};

const noteDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

export function WordCard({ word, log, cadence, onToggleResonance, onAddNote, onDeleteNote }: Props) {
  const [draft, setDraft] = useState('');
  const [confirming, setConfirming] = useState<string | null>(null);
  const [exampleIndex, setExampleIndex] = useState(0);
  const example = word.examples[exampleIndex];

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onAddNote(text);
    setDraft('');
  };

  return (
    <article className="card" aria-labelledby="word-heading">
      <div className="card-head">
        <span className={`origin origin-${word.originType}`}>
          {word.originType === 'coined' ? 'Coined word' : 'Existing word'}
        </span>
        <h2 id="word-heading" className="word">
          {word.word}
        </h2>
        <p className="pron">{word.pronunciation}</p>
        <p className="etym">{word.etymologyOrRoots}</p>
        <p className="definition">{word.definition}</p>
      </div>

      <section className="facet facet-lens">
        <h3>The lens</h3>
        <p className="facet-frame">
          {cadence === 'morning' ? 'Carry this into your day.' : 'Look back over today with this in mind.'}
        </p>
        <p>{word.perceptualLens}</p>
      </section>

      {word.examples.length > 0 && (
        <section className="facet facet-spot" aria-labelledby="spot-heading">
          <div className="spot-head">
            <h3 id="spot-heading">Spotting it</h3>
            <span className="spot-count">
              {exampleIndex + 1} of {word.examples.length}
            </span>
          </div>
          <figure className="example" key={exampleIndex} aria-live="polite">
            <figcaption className="context">{contextLabel[example.context]}</figcaption>
            <p>{example.scene}</p>
          </figure>
          {word.examples.length > 1 && (
            <button
              className="text-btn"
              onClick={() => setExampleIndex((i) => (i + 1) % word.examples.length)}
            >
              Show another example
            </button>
          )}
          {word.nearMiss && (
            <aside className="nearmiss">
              <h4>Near miss</h4>
              <p>{word.nearMiss.scene}</p>
              <p className="whynot">{word.nearMiss.whyNot}</p>
            </aside>
          )}
        </section>
      )}

      <section className="facet facet-shadow">
        <h3>The shadow</h3>
        <p>{word.shadowState}</p>
        {word.shadowNuanceNote && (
          <aside className="nuance">
            <h4>Lucidity check</h4>
            <p>{word.shadowNuanceNote}</p>
          </aside>
        )}
      </section>

      {connectionsFor(word.id).length > 0 && (
        <section className="facet facet-links" aria-label="Connected words">
          <h3>Connected words</h3>
          <ul className="links">
            {connectionsFor(word.id).map((c) => (
              <li key={c.id + c.label}>
                <span className="link-label">{c.label}</span>{' '}
                <a href={`#${c.id}`}>{lexiconById[c.id]?.word ?? c.id}</a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="facet facet-prompt">
        <h3>Field prompt</h3>
        <p className="prompt">{word.fieldPrompt}</p>
        {cadence === 'evening' && (
          <p className="facet-frame">Did it come up today? If not, carry the prompt into tomorrow.</p>
        )}
      </section>

      <section className="facet facet-log">
        <div className="log-head">
          <h3>Field log</h3>
          <button
            className={`resonate ${log.resonated ? 'on' : ''}`}
            aria-pressed={log.resonated}
            onClick={onToggleResonance}
          >
            <span className="dot" aria-hidden="true" />
            {log.resonated ? 'Resonates' : 'Mark as resonant'}
          </button>
        </div>

        <form onSubmit={save} className="note-form">
          <label htmlFor="note-input" className="sr-only">
            Field note
          </label>
          <textarea
            id="note-input"
            rows={3}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={`Spotted ${word.word.toLowerCase()} in the wild? Where, and what did it look like?`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) save(e);
            }}
          />
          <button type="submit" disabled={!draft.trim()}>
            Save note
          </button>
        </form>

        {log.fieldNotes.length > 0 && (
          <ul className="notes">
            {log.fieldNotes.map((n) => (
              <li key={n.id}>
                <time dateTime={n.createdAt}>{noteDate(n.createdAt)}</time>
                <p>{n.text}</p>
                {confirming === n.id ? (
                  <span className="note-actions">
                    <button className="danger" onClick={() => onDeleteNote(n.id)}>
                      Delete note
                    </button>
                    <button onClick={() => setConfirming(null)}>Keep</button>
                  </span>
                ) : (
                  <span className="note-actions">
                    <button onClick={() => setConfirming(n.id)}>Delete</button>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}
