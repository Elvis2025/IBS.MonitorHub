import { MessageType } from "../enums/MessageType";
import { Message } from "./Message";

export class AlertConfig {
    
  info?: string;
  title?: string;
  cancel?: string = 'Cancel';
  accept?: string = 'Ok';
  typeMessage?: MessageType;
  currentMessage?: Message;
  constructor(init?: Partial<AlertConfig>) {
        Object.assign(this,init);
    }
}

