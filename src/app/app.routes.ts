import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'pokemon-list' },
    { path: 'pokemon-list', component: ListComponent },
    { path: 'details/:name', component: DetailsComponent },
];
