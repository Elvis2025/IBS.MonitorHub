import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SettingLanguage } from '../../shared/utils/SettingLanguage';
import { NgxEchartsModule } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';

@Component({
  standalone : true,
    selector: 'app-dashboard',
  imports: [RouterOutlet,CommonModule,TranslateModule,NgxEchartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  currentLanguage: any;

   option: EChartsOption = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, '#FF6E76'],
              [0.5, '#FDDD60'],
              [0.75, '#58D9F9'],
              [1, '#7CFFB2']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: { color: 'auto' }
        },
        axisTick: {
          length: 12,
          lineStyle: { color: 'auto', width: 2 }
        },
        splitLine: {
          length: 20,
          lineStyle: { color: 'auto', width: 5 }
        },
        axisLabel: {
          color: '#464646',
          fontSize: 20,
          distance: -60,
          rotate: 'tangential',
          formatter: (value: number) => {
            if (value === 0.875) return 'Grade A';
            if (value === 0.625) return 'Grade B';
            if (value === 0.375) return 'Grade C';
            if (value === 0.125) return 'Grade D';
            return '';
          }
        },
        title: { offsetCenter: [0, '-10%'], fontSize: 20 },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          formatter: (value: number) => Math.round(value * 100) + '',
          color: 'inherit'
        },
        data: [{ value: 0.7, name: 'Grade Rating' }]
      }
    ]
  };


  constructor(private translate: SettingLanguage){
      translate.setLanguage()
      this.currentLanguage = translate.currentLanguage;
  }

   setGaugeValue(v: number) {
    (this.option.series as any)[0].data = [{ value: v, name: 'Grade Rating' }];
    this.option = { ...this.option }; // fuerza change detection
  }

}
