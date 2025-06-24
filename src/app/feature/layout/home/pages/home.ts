import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService,TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,TranslateModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
    constructor(private router: Router, private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'es';
    this.currentLang = savedLang;
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }

  currentLang = 'es';
  protected title = 'IBS Monitor Hub';
  isSidebarOpen  = false;

  toggleSidebar(){
    this.isSidebarOpen  = !this.isSidebarOpen;
    console.log("ya cambio",this.isSidebarOpen)
  }

  logOut(){
    this.router.navigate(["login"]);
  }

  changeLanguage(event: Event){
   const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.translate.use(language);
    this.currentLang = language;
    localStorage.setItem('lang', language);
  }
}
