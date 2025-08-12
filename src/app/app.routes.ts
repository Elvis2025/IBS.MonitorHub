import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard';
import { PivoteComponent } from './feature/pivote/pivote'; 
import { Login } from './feature/login/login';
import { Home } from './feature/layout/home/home';
import { Setting } from './feature/setting/setting';

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
      { path: 'pivote', component: PivoteComponent },
      { path: 'setting', component: Setting },
    ]
  },
];
