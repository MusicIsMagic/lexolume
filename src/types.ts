/** One entry in the lexicon. New words are added in src/data/lexicon.ts. */
export interface WordEntry {
  /** Stable, lowercase, URL-safe. Never change it once notes exist, or the notes lose their word. */
  id: string;
  word: string;
  /** Plain-English respelling, stressed syllable in capitals. */
  pronunciation: string;
  originType: 'existing' | 'coined';
  /** Language and roots, e.g. "Ancient Greek, kairós: the opportune moment". */
  etymologyOrRoots: string;
  definition: string;
  /** What comes into sharper focus once this word is in mind. */
  perceptualLens: string;
  /** What it looks like when the quality is missing, inverted or faked. */
  shadowState: string;
  /** Optional: where the quality is easy to confuse with something that only looks like it (e.g. calm vs. numbness). */
  shadowNuanceNote?: string;
  /** One concrete, low-friction thing to try or notice today. */
  fieldPrompt: string;
  /** Concrete scenes showing what the word looks like when it happens. Aim for 3, each in a different area of life. */
  examples: WordExample[];
  /** A scene that looks like the word but isn't, and why. */
  nearMiss?: NearMiss;
  tags: string[];
}

export type ExampleContext = 'work' | 'relationships' | 'solitude' | 'body';

export interface WordExample {
  context: ExampleContext;
  scene: string;
}

export interface NearMiss {
  scene: string;
  whyNot: string;
}

export type Cadence = 'morning' | 'evening';

/** One dated sighting note for a word. */
export interface FieldNote {
  id: string;
  text: string;
  createdAt: string; // ISO timestamp
}

/** The user's record for a word. One per word; notes accumulate as a dated log. */
export interface UserLog {
  wordId: string;
  /** Local dates (YYYY-MM-DD) on which the word was shown as the day's word. */
  datesShown: string[];
  resonated: boolean;
  fieldNotes: FieldNote[];
  updatedAt: string; // ISO timestamp
}

export interface AppState {
  version: 1;
  cadence: Cadence;
  /** The word currently in front of the user, and the day it was chosen for. */
  today: { date: string; wordId: string } | null;
  logs: Record<string, UserLog>;
}
