import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponentComponent } from './view/view-component/view-component.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'view', component: ViewComponentComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}

];
