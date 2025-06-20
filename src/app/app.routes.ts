import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/pages/dashboard';
import { PivoteComponent } from './feature/pivote/pages/pivote'; 
export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'pivote',component:PivoteComponent}
];
