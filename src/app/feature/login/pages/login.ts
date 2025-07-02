
import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayAlert } from '../../../shared/components/display-alert/display-alert';
import { TranslateModule} from '@ngx-translate/core';
import { Constants } from '../../../shared/utils/constants';
import { LanguageSelector } from '../../../shared/components/language-selector/language-selector';
import { AlertConfigService } from '../../../core/services/AlertConfigService';
import { AlertConfig } from '../../../core/models/AlertConfig';
import { MessageType } from '../../../core/enums/MessageType';
import { Message } from '../../../core/models/Message';

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
    msg?: Message;
    
 
    constructor(private router: Router,private msgConfig: AlertConfigService) 
    {}
 


  logIn(user: string,password: string){
    
    if(user !== 'ehernandez' || password!== '123qwe'){
      this.msgConfig.setAlert(new AlertConfig({
        info: "Hola nuevo mensaje",
        typeMessage: MessageType.Error,

      }));
      return;
    }

    this.router.navigate(['/dashboard']);
    console.log("vete la home")
  }

 

}
