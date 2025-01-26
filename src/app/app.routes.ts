import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        title:'Users',
        loadComponent: ()=> import('./presentation/components/user-list/user-list/user-list.component')
    },
    {
        path: 'albums',
        title:'Albums',
        loadComponent: ()=> import('./presentation/pages/album/album-list/album-list.component')
    },
    {
        path:'',
        redirectTo: '/albums',
        pathMatch: 'full'
    }



];
