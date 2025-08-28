//#region  Imports
import { Injectable } from "@angular/core";
import { IFindLatencyService } from "../../core/interfaces/IFindLatencyService";
import { AlertConfigService } from "../../core/services/AlertConfigService";
import { MessageType } from "../../core/enums/MessageType";
import { Router } from "@angular/router";
import { Message } from "../../core/models/Message";
import { NavigateTo } from "../../shared/utils/NavigateTo";
import { MeasureOptions } from "../../core/models/MeasureOptions";
import { MeasureResult } from "../../core/models/MeasureResult";
@Injectable({
    providedIn: 'root'
})
//#endregion

export class FindLatencyService implements IFindLatencyService {
    msg: Message = new Message();

    constructor(private msgConfig: AlertConfigService,
                private naviagateTo: NavigateTo
    ) {
        
    }

    async ping(url: string): Promise<number> {
    try {
      const normalized = this.ensureProtocol(url);
      const result = await this.measureUrlLatency(normalized);
      return result.score01;
    } catch (err) {
      return 0; 
    }
  }

  /**
   * Retorna el detalle completo de la medición para la URL dada.
   */
  async pingDetailed(url: string): Promise<MeasureResult> {
    try {
      const normalized = this.ensureProtocol(url);
      return await this.measureUrlLatency(normalized);
    } catch (err) {
      return {
        url,
        attempts: 0,
        samplesMs: [],
        avgMs: 0,
        minMs: 0,
        maxMs: 0,
        score01: 0
      };
    }
  }

  private clamp01(x: number) {
    if (x < 0) return 0;
    if (x > 1) return 1;
    return x;
  }

  private classify(score01: number) {
    if (score01 < 0.25) return "Muy malo";
    if (score01 < 0.50) return "Regular";
    if (score01 < 0.75) return "Bueno";
    return "Muy bueno";
  }

  private latencyToScore(ms: number, BEST_MS: number, WORST_MS: number) {
    const span = WORST_MS - BEST_MS;
    if (span <= 0) return ms <= BEST_MS ? 1 : 0;
    return this.clamp01(1 - (ms - BEST_MS) / span);
  }

  private async timedFetch(url: string, method: "HEAD" | "GET", timeoutMs: number) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    const start = performance.now();
    try {
      const res = await fetch(url, { method, signal: controller.signal, cache: "no-store" });
      const end = performance.now();
      return { ok: res.ok, ms: end - start };
    } finally {
      clearTimeout(t);
    }
  }

  /**
   * Core de medición: hace N intentos y calcula score y categoría.
   * Usa defaults sensatos y permite override vía options.
   */
  private async measureUrlLatency(
    url: string,
    {
      attempts = 5,
      timeoutMs = 5000,
      method = "HEAD",
      BEST_MS = 100,
      WORST_MS = 2000
    }: MeasureOptions = {}
  ): Promise<MeasureResult> {
    const samples: number[] = [];

    for (let i = 0; i < attempts; i++) {
      try {
        const { ok, ms } = await this.timedFetch(url, method, timeoutMs);
        if (!ok && method === "HEAD") {
          const alt = await this.timedFetch(url, "GET", timeoutMs);
          samples.push(alt.ms);
        } else {
          samples.push(ms);
        }
      } catch {
        samples.push(WORST_MS);
      }
    }

    const minMs = Math.min(...samples);
    const maxMs = Math.max(...samples);
    const avgMs = samples.reduce((a, b) => a + b, 0) / samples.length;

    const score01 = this.latencyToScore(avgMs, BEST_MS, WORST_MS);

    return {
      url,
      attempts: samples.length,
      samplesMs: samples.map(v => Math.round(v)),
      avgMs: Math.round(avgMs),
      minMs: Math.round(minMs),
      maxMs: Math.round(maxMs),
      score01: Number(score01.toFixed(3))
    };
  }

  private ensureProtocol(url: string): string {
    if (!/^https?:\/\//i.test(url)) return `https://${url}`;
    return url;
  }

  
    
}
