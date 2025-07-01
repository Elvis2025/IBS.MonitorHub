import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from './constants';

@Injectable({
    providedIn: 'root',
})
export class SettingLanguage {
    currentLanguage: any;
    language = Constants.DefaultLanguage;
    codeLanguage: any;
    constructor(private translate: TranslateService) {}

    setLanguage() {
        try {
            var oldLanguageSettled = localStorage.getItem('languageCode') || this.language.Es;

            if (!Constants.Languages.some((x) => x.Code === oldLanguageSettled)) {
                this.codeLanguage = this.language.Es;
                this.saveDefaultLanguage(this.codeLanguage);
                return;
            }

            this.saveDefaultLanguage(oldLanguageSettled);
        } catch (error) {
            this.codeLanguage = this.language.Es;
            this.saveDefaultLanguage(this.language.Es);
        } finally {
            this.currentLanguage = Constants.Languages.find((x) => x.Code === this.codeLanguage);
        }
    }

    changeLanguage(language: any) {
        try {
            if (language === null) return;
            this.saveDefaultLanguage(language);
            this.codeLanguage = language;
        } catch (error) {
            this.codeLanguage = this.language.Es;
            console.log(error);
            this.saveDefaultLanguage(this.codeLanguage);
        } finally {
            this.currentLanguage = Constants.Languages.find((x) => x.Code === this.codeLanguage);
        }
    }

    private saveDefaultLanguage(languageCode: any) {
        localStorage.setItem('languageCode', languageCode);
        this.translate.setDefaultLang(languageCode);
        this.translate.use(languageCode);
        this.codeLanguage = languageCode;
    }
}
