//#region Imports
import { MessageType } from "../enums/MessageType";
import { AlertConfig } from "../models/AlertConfig";
//#endregion

export interface IAlertConfig{
    setAlert(config: AlertConfig): AlertConfig;
}