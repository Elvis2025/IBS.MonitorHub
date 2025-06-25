import { Language } from './../../../../../node_modules/@ngx-translate/core/lib/translate.service.d';
import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayAlert } from '../../../shared/components/display-alert/display-alert';
import { SettingLanguage } from '../../../shared/utils/SettingLanguage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Constants } from '../../../shared/utils/constants';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule,
            RouterOutlet,
            FormsModule,
            DisplayAlert,
            TranslateModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  currentLanguage = 'es';
  languages = SettingLanguage.Languages;
 
  constructor(private router: Router, private translate: TranslateService) {
      const savedLang = localStorage.getItem('lang') || 'es';
      this.currentLanguage = savedLang;
      this.translate.setDefaultLang(savedLang);
      this.translate.use(savedLang);
    }
  showModal = false;
  typeMessage = Constants.TypeMessage;
  textColor = '';
  backgroundColor = '';
  title = '';
  icon = '';
  errorMessage = '';

  logIn(user: string,password: string){
    if(user !== 'ehernandez' || password!== '123qwe'){
      console.log("ver modale")
      this.showModal = true;
      this.textColor = this.typeMessage.Error.TextColor;
      this.backgroundColor = this.typeMessage.Error.BackgroundColor;
      this.title = this.typeMessage.Error.Title;
      this.icon = this.typeMessage.Error.Icon;
      console.log(this.showModal)
      this.errorMessage = 'Credenciales incorrectas.'
      return;
    }

    this.router.navigate(['/dashboard']);
    console.log("vete la home")
  }

  handleModalConfirm() {
    console.log("no ver modale")
    this.showModal = false;
      console.log(this.showModal)
  }

  changeLanguage(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    console.log(selectElement)
    const language = selectElement.value;
    console.log(language)
    this.translate.use(language);
    this.currentLanguage = language;
    localStorage.setItem('lang', language);
    this.showLanguageMenu= false;
  }

  showLanguageMenu = false;

toggleLanguageMenu() {
  this.showLanguageMenu = !this.showLanguageMenu;
}

}
