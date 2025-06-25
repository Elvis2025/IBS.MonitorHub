import { Language } from './../../../../../../node_modules/@ngx-translate/core/lib/translate.service.d';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import { Constants } from '../../../../shared/utils/constants';
import { FormsModule } from '@angular/forms';
import { SettingLanguage } from '../../../../shared/utils/SettingLanguage';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,
            RouterOutlet,
            CommonModule,
            TranslateModule,
            FormsModule,
          ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  currentLanguage: any;
  languages = SettingLanguage.Languages;
  SettingLang = SettingLanguage;
    constructor(private router: Router, private translate: TranslateService) {
    let savedLang = localStorage.getItem('languageCode') || 'es';

    if(!this.languages.some(x => x.Code === savedLang)) localStorage.setItem('languageCode',SettingLanguage.DefaultLanguage);

    this.currentLanguage = this.languages.find(x => x.Code === savedLang);

    this.translate.setDefaultLang(this.currentLanguage.Code);
    this.translate.use(this.currentLanguage.Code);
  }

  
  protected title = 'IBS Monitor Hub';
  isSidebarOpen  = false;

  toggleSidebar(){
    this.isSidebarOpen  = !this.isSidebarOpen;
    console.log("ya cambio",this.isSidebarOpen)
  }

  logOut(){
    this.router.navigate(["login"]);
  }
  
  setLanguage(code: string){
    SettingLanguage.
  }
}
