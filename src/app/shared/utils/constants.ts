//#region Imports
import { BgColor } from '../../core/enums/BgColor';
import { Icon } from '../../core/enums/Icon';
import { MessageType } from '../../core/enums/MessageType';
import { TextColor } from '../../core/enums/TextColor';
import { Message } from '../../core/models/Message';
import { Language } from './../../../../node_modules/@ngx-translate/core/lib/translate.service.d';
//#endregion

export class Constants {
  
  static readonly DefaultLanguage = {
    Es: 'es',
    En: 'en',
    Fr: 'fr',
    Pt: 'pt',
    It: 'it',
  };

  static readonly Languages = [
    {
      Code: 'en',
      Name: 'English',
    },
    {
      Code: 'es',
      Name: 'Spanish',
    },
    {
      Code: 'fr',
      Name: 'French',
    },
    {
      Code: 'pt',
      Name: 'Portuguese',
    },
    {
      Code: 'it',
      Name: 'Italian',
    },
  ];
}
