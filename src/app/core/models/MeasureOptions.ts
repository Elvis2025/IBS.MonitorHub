export interface MeasureOptions {
  attempts?: number;
  timeoutMs?: number;
  method?: "HEAD" | "GET";
  BEST_MS?: number;
  WORST_MS?: number;
}