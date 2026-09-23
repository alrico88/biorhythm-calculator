export type BiorhythmType = keyof typeof import('./constants').BIORHYTHMS;

export interface BiorhythmResult {
  physical: number;
  emotional: number;
  intellectual: number;
}

export interface BiorhythmRangeResult {
  day: Date;
  biorhythm: BiorhythmResult;
}
