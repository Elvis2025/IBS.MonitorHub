import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone : true,
    selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

}
