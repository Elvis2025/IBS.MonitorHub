import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule,RouterOutlet,FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  constructor(private router:Router ){}

  logIn(){
    this.router.navigate(['/dashboard']);
    console.log("vete la home")
  }
}
