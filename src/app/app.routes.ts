import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home', loadComponent:()=>import ('./pages/home/home.component')
    },
    {
        path:'products', loadComponent:()=> import('./pages/list-products/list-products.component')
    },
    {
        path:'details/:id', loadComponent:()=> import('./pages/details/details.component')
    },
    {
        path:'cart', loadComponent:()=> import ('./pages/cart/cart.component')
    },
   
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },

];
