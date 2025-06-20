import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'IBS Monitor Hub';
  isSidebarOpen  = false;

  toggleSidebar(){
    this.isSidebarOpen  = !this.isSidebarOpen;
    console.log("ya cambio",this.isSidebarOpen)
  }

}
