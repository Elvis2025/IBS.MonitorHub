import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SettingLanguage } from '../../shared/utils/SettingLanguage';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugeCard } from '../gauge-card/gauge-card';

@Component({
  standalone : true,
    selector: 'app-dashboard',
  imports: [RouterOutlet,CommonModule,TranslateModule,NgxEchartsModule,GaugeCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  currentLanguage: any;
  services = [
    { name: 'Ithot Systems 11', value: 0.5 },
    { name: 'Ithot Systems 12', value: 0.42 },
    { name: 'Ithot Systems 13', value: 0.42 },
    { name: 'Ithot Systems 14', value: 0.42 },
    { name: 'Ithot Systems 15', value: 0.42 }
  ];

  constructor(private translate: SettingLanguage){
      translate.setLanguage()
      this.currentLanguage = translate.currentLanguage;
  }

   

}
