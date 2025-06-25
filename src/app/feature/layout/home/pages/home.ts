//#region Imports 
import { Language } from './../../../../../../node_modules/@ngx-translate/core/lib/translate.service.d';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Constants } from '../../../../shared/utils/constants';
import { FormsModule } from '@angular/forms';
import { SettingLanguage } from '../../../../shared/utils/SettingLanguage';
import { LanguageSelector } from "../../../../shared/components/language-selector/language-selector";
//#endregion
//#region Components
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,
    RouterOutlet,
    CommonModule,
    TranslateModule,
    FormsModule, LanguageSelector],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
//#endregion

export class Home {
  currentLanguage: any;
  languages = Constants.Languages;
  codeLanguage: any;
  //SettingLang = SettingLanguage;
  constructor(private router: Router, 
              private translate: SettingLanguage) 
  {
      // translate.setLanguage()
      // this.currentLanguage = translate.currentLanguage;
  }

  
  protected title = 'IBS Monitor Hub';
  isSidebarOpen  = false;

  toggleSidebar() { this.isSidebarOpen  = !this.isSidebarOpen;}

  logOut(){ this.router.navigate(["login"]); }
  
  // changeLanguage(event: Event){
  //   this.codeLanguage = (event.target as HTMLSelectElement).value
  //   this.translate.changeLanguage(this.codeLanguage);
  //   this.currentLanguage = this.translate.currentLanguage;

  // }
}
