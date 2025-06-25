import { Component, Input } from '@angular/core';
import { SettingLanguage } from '../../utils/SettingLanguage';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Constants } from '../../utils/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  imports: [TranslateModule,FormsModule,CommonModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css'
})
export class LanguageSelector {
  currentLanguage: any;
  languages = Constants.Languages;
  // @Input() currentLanguage: any;
 

  constructor(private translate: SettingLanguage) {
     translate.setLanguage();
     this.currentLanguage = translate.currentLanguage;
  }

  changeLanguage(event: Event) {
    const codeLanguage = (event.target as HTMLSelectElement).value;
     this.translate.changeLanguage(codeLanguage);
    this.currentLanguage = this.translate.currentLanguage;
  }
}
