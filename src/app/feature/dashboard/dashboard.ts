import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SettingLanguage } from '../../shared/utils/SettingLanguage';

@Component({
  standalone : true,
    selector: 'app-dashboard',
  imports: [RouterOutlet,CommonModule,TranslateModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  currentLanguage: any;
  constructor(private translate: SettingLanguage){
      translate.setLanguage()
      this.currentLanguage = translate.currentLanguage;
  }
}
