//#region  Imports
import { Injectable } from "@angular/core";
import { IFindLatencyService } from "../../core/interfaces/IFindLatencyService";
import { AlertConfigService } from "../../core/services/AlertConfigService";
import { MessageType } from "../../core/enums/MessageType";
import { Router } from "@angular/router";
import { Message } from "../../core/models/Message";
import { NavigateTo } from "../../shared/utils/NavigateTo";
import { MeasureOptions } from "../../core/models/MeasureOptions";
import { MeasureResult } from "../../core/models/MeasureResult";
@Injectable({
    providedIn: 'root'
})
//#endregion

export class FindLatencyService implements IFindLatencyService {
    msg: Message = new Message();

    constructor(private msgConfig: AlertConfigService,
                private naviagateTo: NavigateTo
    ) {
        
    }
    ping(url: string, options?: MeasureOptions): Promise<number> {
        throw new Error("Method not implemented.");
    }
    pingDetailed(url: string, options?: MeasureOptions): Promise<MeasureResult> {
        throw new Error("Method not implemented.");
    }
   
}
