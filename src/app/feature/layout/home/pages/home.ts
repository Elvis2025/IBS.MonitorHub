import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  constructor(private router:Router ){};
  protected title = 'IBS Monitor Hub';
  isSidebarOpen  = false;

  toggleSidebar(){
    this.isSidebarOpen  = !this.isSidebarOpen;
    console.log("ya cambio",this.isSidebarOpen)
  }

  logOut(){
    this.router.navigate(["login"]);
  }
}
