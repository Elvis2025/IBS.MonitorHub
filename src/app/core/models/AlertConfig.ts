import { MessageType } from "../enums/MessageType";
import { Message } from "./Message";

export class AlertConfig {
    
  info?: string;
  title?: string;
  cancel?: string;
  accept?: string;
  showBtnCancel?: Boolean = false;
  showBtnAccept?: Boolean = true;
  setMilliSeconds?: number;
  typeMessage?: MessageType;
  currentMessage?: Message;
  constructor(init?: Partial<AlertConfig>) {
        Object.assign(this,init);
    }
}

