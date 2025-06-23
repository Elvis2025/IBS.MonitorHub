import { RouterOutlet } from '@angular/router';
import { Home } from './feature/layout/home/pages/home';
import { Component } from '@angular/core';
// import { Home } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
