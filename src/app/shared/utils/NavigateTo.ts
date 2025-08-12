//#region Imports
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
//#endregion

export class NavigateTo{
    private static readonly router:Router;
    constructor(private router: Router) { this.router = router;}

    Login = () => {this.router.navigate(['login'])};
    Dashboard = () => {this.router.navigate(['/dashboard'])};
    Pivote = () => {this.router.navigate(['/pivote'])};
    Setting = () => {this.router.navigate(['/setting'])};

}