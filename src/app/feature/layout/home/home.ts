//#region Imports 
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Constants } from '../../../shared/utils/constants';
import { FormsModule } from '@angular/forms';
import { LanguageSelector } from "../../../shared/components/language-selector/language-selector";
import { NavigateTo } from '../../../shared/utils/NavigateTo';
//#endregion
//#region Components
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,
    RouterOutlet,
    CommonModule,
    TranslateModule,
    FormsModule, LanguageSelector],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
//#endregion

export class Home {
  currentLanguage: any;
  languages = Constants.Languages;
  codeLanguage: any;
  constructor(private navigateTo: NavigateTo) {}

  
  protected title = 'IBS Monitor Hub';
  isSidebarOpen  = false;

  toggleSidebar() { this.isSidebarOpen  = !this.isSidebarOpen;}

  logOut = () =>{ this.navigateTo.Login()}
  
}
