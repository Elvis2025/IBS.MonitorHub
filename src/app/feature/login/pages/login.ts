import { Language } from './../../../../../node_modules/@ngx-translate/core/lib/translate.service.d';
import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayAlert } from '../../../shared/components/display-alert/display-alert';
import { SettingLanguage } from '../../../shared/utils/SettingLanguage';
import { TranslateModule} from '@ngx-translate/core';
import { Constants } from '../../../shared/utils/constants';
import { LanguageSelector } from '../../../shared/components/language-selector/language-selector';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule,
            RouterOutlet,
            FormsModule,
            DisplayAlert,
            TranslateModule,
            LanguageSelector
          ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
    
    
 
    constructor(private router: Router) 
    {}
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
    this.showModal = false;
      console.log(this.showModal)
  }

  // changeLanguage(event: Event){
  //   const codeLanguage = (event.target as HTMLSelectElement).value;
  //   this.translate.changeLanguage(codeLanguage);
  //   this.currentLanguage = this.translate.currentLanguage;
  // }

  showLanguageMenu = false;

toggleLanguageMenu() {
this.showLanguageMenu = !this.showLanguageMenu;
}

}
