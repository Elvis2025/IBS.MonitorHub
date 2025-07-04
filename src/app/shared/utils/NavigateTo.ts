//#region Imports
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
//#endregion
export class NavigateTo{
    private static readonly router:Router;
    constructor(private router: Router) {
        this.router = router;
    }

    Dashboard = () => {this.router.navigate(['/dashboard'])};
    Login = () => {
                    console.log("entre")
                    this.router.navigate(['login'])
                    console.log("44sdww")



    };
    Pivote = () => {this.router.navigate(['/pivote'])};

}