import type { Cadence } from '../types';

export function Welcome({ cadence, onEnter }: { cadence: Cadence; onEnter: () => void }) {
  return (
    <div className="welcome">
      <div className="welcome-inner">
        <p className="welcome-brand">LexoLume</p>
        <h1 className="thesis">
          We are the words <em>we think.</em>
          <a href="#lexoduction" className="thesis-mark" aria-label="A note on lexoduction">
            *
          </a>
        </h1>
        <p className="welcome-sub">
          Thought moves along the tracks of the words available to it. Each day, one word to hold as a lens, so
          you notice what it names when it shows up in your life.
        </p>
        <p className="welcome-note">
          * LexoLume is itself an act of <a href="#lexoduction">lexoduction</a>: it hands you words in order to change
          what you notice. Keep the ones that help you see more clearly.
        </p>
        <button className="enter-btn" onClick={onEnter} autoFocus>
          {cadence === 'morning' ? "Open today's word" : "Open this evening's word"}
        </button>
      </div>
    </div>
  );
}
