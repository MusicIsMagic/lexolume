/**
 * Connections between words, shown on each card and used by the archive's "Pairs" filter.
 * `shadow`: the second word is the shadow (counter-state) of the first.
 * `related`: the two words illuminate each other.
 * Add a line here whenever a new word has a natural partner in the deck.
 */
export type PairKind = 'shadow' | 'related';

export const pairs: Array<[string, string, PairKind]> = [
  ['eudaimonia', 'tepidaimonia', 'shadow'],
  ['gratiance', 'agratiance', 'shadow'],
  ['pathosthenia', 'apathosthenia', 'shadow'],
  ['authentophilia', 'authentophobia', 'shadow'],
  ['peiraphilia', 'atychiphobia', 'shadow'],
  ['plerostasis', 'pleonexia', 'shadow'],
  ['plerostasis', 'acedia', 'shadow'],
  ['liberance', 'mauvaise-foi', 'shadow'],
  ['liberance', 'ressentiment', 'shadow'],
  ['mudita', 'schadenfreude', 'shadow'],
  ['sophrosyne', 'hubris', 'shadow'],
  ['lebenslust', 'tepidaimonia', 'shadow'],
  ['haplophilia', 'pleonexia', 'shadow'],
  ['phronesis', 'akrasia', 'shadow'],
  ['lexoduction', 'culpaduction', 'related'],
  ['lexoduction', 'sophistry', 'related'],
  ['lexoduction', 'parrhesia', 'related'],
  ['lexolumosity', 'lexoduction', 'related'],
  ['gratiance', 'retrogratiance', 'related'],
  ['retrogratiance', 'pathosthenia', 'related'],
  ['retrogratiance', 'chronolumosity', 'related'],
  ['respirance', 'plerostasis', 'related'],
  ['philia', 'agape', 'related'],
  ['philia', 'eunoia', 'related'],
  ['peiraphilia', 'neophilia', 'related'],
  ['shoshin', 'aporia', 'related'],
  ['authentophobia', 'amour-propre', 'related'],
  ['weltschmerz', 'tepidaimonia', 'related'],
  ['ataraxia', 'liberance', 'related'],
  ['eudaimonia', 'telos', 'related'],
];

export interface Connection {
  id: string;
  label: string;
}

/** Everything connected to a word, phrased from that word's point of view. */
export function connectionsFor(id: string): Connection[] {
  const out: Connection[] = [];
  for (const [a, b, kind] of pairs) {
    if (a === id) out.push({ id: b, label: kind === 'shadow' ? 'Shadow' : 'Related' });
    else if (b === id) out.push({ id: a, label: kind === 'shadow' ? 'Shadow of' : 'Related' });
  }
  return out;
}

export const pairedIds = new Set(pairs.flatMap(([a, b]) => [a, b]));
