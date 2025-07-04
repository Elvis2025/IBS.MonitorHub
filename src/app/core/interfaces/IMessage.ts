export interface IMessage{
    open(): void;
    close():void;
    onAccept(): void;
    onCancel(): void;
    openAsync(): Promise<void>;
}