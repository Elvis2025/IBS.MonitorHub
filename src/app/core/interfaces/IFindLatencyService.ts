import { MeasureOptions } from "../models/MeasureOptions";
import { MeasureResult } from "../models/MeasureResult";

export interface IFindLatencyService{
    ping(url: string, options?: MeasureOptions): Promise<number>;
  pingDetailed(url: string, options?: MeasureOptions): Promise<MeasureResult>;
}