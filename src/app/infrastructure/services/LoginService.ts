//#region  Imports
import { Injectable } from "@angular/core";
import { ILoginService } from "../../core/interfaces/ILoginService";
import { User } from "../../core/models/User";
import { AlertConfig } from "../../core/models/AlertConfig";
import { AlertConfigService } from "../../core/services/AlertConfigService";
import { MessageType } from "../../core/enums/MessageType";
import { Router } from "@angular/router";
import { Message } from "../../core/models/Message";
import { NavigateTo } from "../../shared/utils/NavigateTo";
@Injectable({
    providedIn: 'root'
})
//#endregion

export class LoginService implements ILoginService {
    msg: Message = new Message();

    constructor(private msgConfig: AlertConfigService,
                private naviagateTo: NavigateTo
    ) {
        
    }
    async Login(user: User): Promise<User>{
        
        try {
            
            if(user?.name !== 'ehernandez' || user?.password !== '123qwe'){
                console.log(user);
                this.msg = this.msgConfig.setAlert(new AlertConfig({
                    info: "Credenciales incorrectas. Deseas continuar sin usuario?",
                    typeMessage: MessageType.Alert,
                    accept: "Si, continuar.",
                    showBtnCancel: true
                }));
            
                this.msg.open();
                user.msg = this.msg;
                return Promise.resolve(user);
            }

            user.msg =  this.msgConfig.displaySuccesMessage("Has iniciado sesión correctamente.",1500,this.naviagateTo.Dashboard);
            return Promise.resolve(user);
        } catch (error) {
        
            this.msg = this.msgConfig.displayErrorMessage("Login Error: "+error);
            this.msg.open();
            user.msg = this.msg;
            return Promise.resolve(user);

        }
    }
}
