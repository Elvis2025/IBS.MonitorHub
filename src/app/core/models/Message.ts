import { IMessage } from "../interfaces/IMessage";

export class Message implements IMessage{
    textColor?: string;
    icon?: string;
    bgColor?: string;
    title?: string;
    cancel?: string;
    accept?: string;
    showMessage?: Boolean = false;
    showBtnCancel?: Boolean = this.cancel !== "";
    constructor(init?: Partial<Message>) {
        Object.assign(this,init);
    }

    open(): void { this.showMessage = true; }
    close(): void { this.showMessage = false; }
   

    
}