//#region Imports
import { BgColor } from '../../core/enums/BgColor';
import { BorderColor } from '../../core/enums/BorderColor';
import { Icon } from '../../core/enums/Icon';
import { MessageType } from '../../core/enums/MessageType';
import { ShadowColor } from '../../core/enums/ShadowColor';
import { TextColor } from '../../core/enums/TextColor';
import { Message } from './../../core/models/Message';
//#endregion

export  class Messages{
    static readonly Error: Message = new Message({
        textColor: TextColor.Red700,
        icon: Icon.CircleXMark +' '+ TextColor.Red700,
        bgColor: BgColor.Red200,
        borderColor: BorderColor.Red700,
        shadowColor: ShadowColor.Red400,
        title: MessageType[MessageType.Error].toUpperCase(),
    });
    static readonly Alert: Message = new Message({
        textColor: TextColor.Cyan700,
        icon: Icon.CircleExclamation +' '+ TextColor.Cyan700,
        bgColor: BgColor.Cyan100,
        borderColor: BorderColor.Cyan700,
        shadowColor: ShadowColor.Cyan400,
        title: MessageType[MessageType.Alert].toUpperCase(),
    });
    static readonly Warning: Message = new Message({
        textColor: TextColor.Yellow500,
        icon: Icon.TriangleExclamation +' '+ TextColor.Yellow500,
        bgColor: BgColor.Yellow100,
        borderColor: BorderColor.Yellow500,
        shadowColor: ShadowColor.Yellow400,
        title: MessageType[MessageType.Warning].toUpperCase(),
    });
    static readonly Success: Message = new Message({
        textColor: TextColor.Green600,
        icon: Icon.CircleCheck +' '+ TextColor.Green600,
        bgColor: BgColor.Green200,
        borderColor: BorderColor.Green600,
        shadowColor: ShadowColor.Green400,
        title: MessageType[MessageType.Success].toUpperCase(),
    });


}