import { Message } from './../models/Message';
//#region Imports
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlertConfig } from "../interfaces/IAlertConfig";
import { AlertConfig } from '../models/AlertConfig';
import { Constants } from '../../shared/utils/constants';
import { Messages } from '../../shared/utils/Messages';
import { MessageType } from '../enums/MessageType';
@Injectable({
    providedIn: 'root'
})
//#endregion

export class AlertConfigService implements IAlertConfig{
    
    private msg?: Message;// = false;

    setAlert(config: AlertConfig): Message {
        return this.configAlert(config);
    }
    displayErrorMessage(error: string): Message{
       this.msg = this.setAlert(new AlertConfig({
        info: error,
        typeMessage: MessageType.Error,
      }));
      this.msg.open();
      return this.msg;
    }

    displaySuccesMessage(info: string, milliseconds: number = 1500,toContinue:() => void | null): Message{
       this.msg = this.setAlert(new AlertConfig({
        info: info,
        typeMessage: MessageType.Success,
        showBtnAccept: false,
        setMilliSeconds: milliseconds
      }));
      this.msg.toContinue = toContinue;
      this.msg.openAsync();
      return this.msg;
    }


    private configAlert(config: AlertConfig): Message{

        if(MessageType.Error === config.typeMessage) 
            return this.errorMessage(config);
        if(MessageType.Warning === config.typeMessage) 
            return this.warningMessage(config);
        if(MessageType.Success === config.typeMessage) 
            return this.successMessage(config);

        return this.alertMessage(config);
    }

    private alertMessage(config: AlertConfig): Message{
        return this.setMessage(config,Messages.Alert);
    }
    private errorMessage(config: AlertConfig): Message{
        return this.setMessage(config,Messages.Error);
    }
    private warningMessage(config: AlertConfig): Message{
       return this.setMessage(config,Messages.Warning);
    }

    private successMessage(config: AlertConfig): Message{
        return this.setMessage(config,Messages.Success);
    }

    private setMessage(config: AlertConfig,message: Message): Message{
        this.msg = message;
        this.msg.accept = config.accept || this.msg.accept;
        this.msg.cancel = config.cancel || this.msg.cancel;
        this.msg.title = config.title || this.msg.title;
        this.msg.info = config.info;
        this.msg.showBtnCancel = config.showBtnCancel;
        this.msg.showBtnAccept = config.showBtnAccept;
        this.msg.setMilliSeconds = config.setMilliSeconds || this.msg.setMilliSeconds;
        return this.msg;
    }

    

   


}