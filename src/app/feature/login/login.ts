
import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayAlert } from '../../shared/components/display-alert/display-alert';
import { TranslateModule} from '@ngx-translate/core';
import { LanguageSelector } from '../../shared/components/language-selector/language-selector';
import { AlertConfigService } from '../../core/services/AlertConfigService';
import { AlertConfig } from '../../core/models/AlertConfig';
import { MessageType } from '../../core/enums/MessageType';
import { Message } from '../../core/models/Message';
import { LoginService } from '../../infrastructure/services/LoginService';
import { User } from '../../core/models/User';

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
    currentUser: User = new User;
showPassword: any;
 
    constructor(private router: Router,private msgConfig: AlertConfigService,private userService: LoginService){}
 

  
  async logIn() {
    try {
      this.currentUser = await this.userService.Login(this.currentUser);
      
      
    } catch (error) {
      console.log("que suscede")
      this.currentUser.msg = this.msgConfig.displayErrorMessage("Login Error: "+error);
    }
  }

 

}
