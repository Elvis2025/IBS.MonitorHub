//#region Imports
import { AlertConfig } from "../models/AlertConfig";
import { Message } from "../models/Message";
//#endregion


export interface IAlertConfig{
    setAlert(config: AlertConfig): Message;
}