//#region Imports
import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayAlert } from '../../shared/components/display-alert/display-alert';
import { TranslateModule} from '@ngx-translate/core';
import { LanguageSelector } from '../../shared/components/language-selector/language-selector';
import { AlertConfigService } from '../../core/services/AlertConfigService';
import { LoginService } from '../../infrastructure/services/LoginService';
import { User } from '../../core/models/User';
//#endregion
//#region Components
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
//#endregion


export class Login {
    currentUser: User = new User;
showPassword: any;
 
    constructor(private msgConfig: AlertConfigService,
                private userService: LoginService){}
  
   logIn = async () => {
      this.currentUser = await this.userService.Login(this.currentUser);
  }

 

}
