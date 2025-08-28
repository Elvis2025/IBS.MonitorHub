import { MeasureOptions } from "../models/MeasureOptions";
import { MeasureResult } from "../models/MeasureResult";

export interface IFindLatencyService{
    ping(url: string): Promise<number>;
  pingDetailed(url: string): Promise<MeasureResult>;
}