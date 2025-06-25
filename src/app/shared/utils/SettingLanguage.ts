import { TranslateModule, TranslateService } from '@ngx-translate/core';
export  class SettingLanguage{
   
    currentLanguage: any;
    constructor(private translate: TranslateService){

    }

    static changeLanguage(language: any){
    if(language === null) return;
    const index = (language.target as HTMLSelectElement).value
    this.currentLanguage = SettingLanguage.Languages.find(x => x.Code === index);
    this.translate.use(this.currentLanguage.Code);
    localStorage.setItem('languageCode', this.currentLanguage.Code);
  }

}