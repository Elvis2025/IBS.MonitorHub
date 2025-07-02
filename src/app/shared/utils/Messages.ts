//#region Imports
import { BgColor } from '../../core/enums/BgColor';
import { Icon } from '../../core/enums/Icon';
import { MessageType } from '../../core/enums/MessageType';
import { TextColor } from '../../core/enums/TextColor';
import { Message } from './../../core/models/Message';
//#endregion

export class Messages{
    static readonly Error: Message;
    static readonly Alert: Message;
    static readonly Warning: Message;
    static readonly Success: Message;

    Error = new Message({
        textColor: TextColor.Red700,
        icon: Icon.CircleXMark +' '+ TextColor.Red700,
        bgColor: BgColor.Red200,
        title: MessageType[MessageType.Error],
    });
    Alert = new Message({
        textColor: TextColor.Red700,
        icon: Icon.CircleXMark +' '+ TextColor.Red700,
        bgColor: BgColor.Red200,
        title: MessageType[MessageType.Error],
    });
    Warning = new Message({
        textColor: TextColor.Red700,
        icon: Icon.CircleXMark +' '+ TextColor.Red700,
        bgColor: BgColor.Red200,
        title: MessageType[MessageType.Error],
    });
    Success = new Message({
        textColor: TextColor.Red700,
        icon: Icon.CircleXMark +' '+ TextColor.Red700,
        bgColor: BgColor.Red200,
        title: MessageType[MessageType.Error],
    });


}