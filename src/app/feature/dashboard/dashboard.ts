import { CommonModule } from '@angular/common';
import { Component,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SettingLanguage } from '../../shared/utils/SettingLanguage';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugeCard } from '../gauge-card/gauge-card';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { Service } from '../../core/models/Service';



type  PingPostResponse= {
  Url: string;
  StatusCode: number;
  Success: boolean;
  elapsedMilliseconds: number;
  ContentLength?: number | null;
  score: number;
};

const API_BASE = 'https://localhost:7198'; // <-- tu backend .NET
@Component({
  standalone : true,
    selector: 'app-dashboard',
  imports: [RouterOutlet,CommonModule,TranslateModule,NgxEchartsModule,GaugeCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit{
  currentLanguage: any;

  services:Service[]  = [
    { id: 1,name: 'Google', value:4,url: 'google.com.do',busy: false },
    { id: 2,name: 'Ithot Systems pro', value: 0.90,url: 'ibs.ibsystems.com.do',busy: false },
    { id: 3,name: 'Ithot Systems suitedev', value: 0.7844,url: 'dev.ibsystems.com.do:8500',busy: false },
    { id: 4,name: 'Ithot Systems pro', value: 0.195448,url: 'ibs.ibsystems.com.do',busy: false },
    { id: 5,name: 'Ithot Systems pro', value: 0.65584,url: 'ibs.ibsystems.com.do',busy: false }
  ];

  constructor(private translate: SettingLanguage,private http: HttpClient){
      translate.setLanguage()
      this.currentLanguage = translate.currentLanguage;
  }

   ngOnInit(): void {
  this.checkLatencies();
}

async checkLatencies() {
  for (const service of this.services) {
      if(service.busy) continue;
        service.busy = true;
      try {
      const body = JSON.stringify(`https://${service.url}`);
      const resp = await firstValueFrom(
        this.http.post<PingPostResponse>(`${API_BASE}/WeatherForecast`, body, {
          headers: { 'Content-Type': 'application/json' }
        })
      );
      service.value = resp.score;
      } catch (err: any) {
        console.error(`Error midiendo ${service.url}`, err?.message || err);
        service.value = 0; // o un sentinel (ej: -1) si quieres indicar error
      }finally{
         service.busy = false;
      }
    }
}
async pingUrl(service:Service) {
      if(service.busy) return;
      try {
       service.busy = true;
       const body = JSON.stringify(`https://${service.url}`);
       const resp = await firstValueFrom(
        this.http.post<PingPostResponse>(`${API_BASE}/WeatherForecast`, body, {
          headers: { 'Content-Type': 'application/json' }
        }).pipe(timeout(5000))
      );
      service.value = resp.score;
      } catch (err: any) {
        console.error(`Error midiendo ${service.url}`, err?.message || err);
        service.value = 0;
      }finally{
        service.busy = false; // 🔹 Termina la operación
      }
    
}

}
