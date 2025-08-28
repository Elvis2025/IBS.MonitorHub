export interface MeasureResult {
  url: string;
  attempts: number;
  samplesMs: number[];
  avgMs: number;
  minMs: number;
  maxMs: number;
  score01: number;
}