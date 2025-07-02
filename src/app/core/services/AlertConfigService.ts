//#region Imports
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlertConfig } from "../interfaces/IAlertConfig";
import { AlertConfig } from '../models/AlertConfig';
import { Constants } from '../../shared/utils/constants';
import { Messages } from '../../shared/utils/Messages';
import { MessageType } from '../enums/MessageType';
import { Message } from '../models/Message';
@Injectable({
    providedIn: 'root'
})
//#endregion

export class AlertConfigService implements IAlertConfig{
    
    private msg?: Message;// = false;

    setAlert(config: AlertConfig): AlertConfig {
        return this.configAlert(config);
    }
   
    private configAlert(config: AlertConfig): Message{

        
        if(MessageType.Error === config.typeMessage) return this.errorMessage(config);
        if(MessageType.Warning === config.typeMessage) return this.warningMessage(config);
        if(MessageType.Success === config.typeMessage) return this.successMessage(config);
        return this.alertMessage(config);
    }

    private alertMessage(config: AlertConfig): Message{
        this.msg =  Messages.Alert;
        this.msg.accept = config.accept;
        this.msg.cancel = config.cancel;
        this.msg.title = config.info;
        return this.msg;
    }
    private errorMessage(config: AlertConfig): Message{
        this.msg =  Messages.Error;
        this.msg.accept = config.accept;
        this.msg.cancel = config.cancel;
        this.msg.title = config.info;
        return this.msg;
    }
    private warningMessage(config: AlertConfig): Message{
       this.msg =  Messages.Warning;
        this.msg.accept = config.accept;
        this.msg.cancel = config.cancel;
        this.msg.title = config.info;
        return this.msg;
    }
    private successMessage(config: AlertConfig): Message{
        this.msg =  Messages.Success;
        this.msg.accept = config.accept;
        this.msg.cancel = config.cancel;
        this.msg.title = config.info;
        return this.msg;
    }


    

   


}