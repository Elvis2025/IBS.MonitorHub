import { IMessage } from "../interfaces/IMessage";

export class Message implements IMessage{
    textColor?: string;
    icon?: string;
    bgColor?: string;
    borderColor?: string;
    shadowColor?: string;
    info?:string;
    title?: string;
    cancel?: string = "CANCEL";
    accept?: string = "OK";
    isAccepted?: Boolean = false;
    showMessage?: Boolean = false;
    showBtnCancel?: Boolean = this.cancel !== "";
    showBtnAccept?: Boolean = true;
    setMilliSeconds?:number  = 2500;
    toContinue?: () => void;
    constructor(init?: Partial<Message>) {
        Object.assign(this,init);
    }

    onAccept(): void {
        if(this.showBtnCancel) this.isAccepted = true;
        if(this.toContinue){
            this.toContinue();
        }
        this.close();
    }
    onCancel(): void{
        this.isAccepted = false;
        this.close();
    }

    open(): void { 
        this.showMessage = true; 
        if(!this.showBtnAccept){
            setTimeout(()=>{
                this.showMessage = false;
            },this.setMilliSeconds)
        }    
    }
    openAsync(): Promise<void> { 
        this.showMessage = true; 
        if(!this.showBtnAccept){
            setTimeout(()=>{
                this.showMessage = false;
                if(this.toContinue){
                    this.toContinue();
                }
            },this.setMilliSeconds)
        }    
        return Promise.resolve();
    }



    close = () => this.showMessage = false; 
   

    
}