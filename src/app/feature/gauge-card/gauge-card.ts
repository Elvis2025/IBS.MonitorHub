import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
@Component({
  selector: 'gauge-card',
  imports: [NgxEchartsModule],
  standalone: true,
  templateUrl: './gauge-card.html',
  styleUrl: './gauge-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GaugeCard implements OnChanges{
  @Input() name = 'Servicio';
  @Input() value = 0.5;
  @Input() stops: [number, string][] = [
    [0.25, '#FF6E76'],
    [0.5,  '#FDDD60'],
    [0.75, '#58D9F9'],
    [1,    '#7CFFB2']
  ];
  @Input() startAngle = 180;
  @Input() endAngle   = 0;
  @Input() center: [string, string] = ['50%', '75%'];
  @Input() radius = '100%';

  option!: EChartsOption;


  ngOnChanges(changes: SimpleChanges): void {
    this.option = this.buildOption(this.value, this.name, this.stops);
  }



   private buildOption(value: number, name: string, stops: [number, string][]): EChartsOption {
    const clamped = Math.max(0, Math.min(1, value));
    return {
      series: [
        {
          type: 'gauge',
          startAngle: this.startAngle,
          endAngle: this.endAngle,
          center: this.center,
          radius: this.radius,
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: { width: 6, color: stops }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '32%',
            width: 20,
            offsetCenter: [0, '-40%'],
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
            color: '#FFFFFF',
            fontSize: 14,
            distance: -55,
            rotate: 'tangential',
            formatter: () => '' // sin etiquetas
          },
          title: { offsetCenter: [0, '0%'], fontSize: 16, color: '#FFFFFF' },
          detail: {
            fontSize: 24,
            offsetCenter: [0, '-25%'],
            valueAnimation: true,
            formatter: (v: number) => Math.round(v * 100) + '',
            color: 'inherit'
          },
          data: [{ value: clamped, name }]
        }
      ]
    };
  }
}
