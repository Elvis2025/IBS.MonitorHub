import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/pages/dashboard';
import { PivoteComponent } from './feature/pivote/pages/pivote'; 
import { Login } from './feature/login/pages/login';
import { Home } from './feature/layout/home/pages/home';

export const routes: Routes = [ 
    //{path:'',component:Home},
    {path:'',component:Login},
    {path:'login',component:Login},
   {
    path: '',
    component: Home,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pivote', component: PivoteComponent }
    ]
  },
];
