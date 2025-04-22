import { Routes } from '@angular/router';

import { CreatePizza } from './app/pages/create-pizza/create-pizza.component';
import { PizzaPay } from './app/pages/pizza-pay/pizza-pay.component';
import { PizzaAbout } from './app/pages/pizza-about/pizza-about.component';

import { PizzaLogin } from './app/pages/pizza-login/pizza-login.component';
import { PizzaSignUp } from './app/pages/pizza-sign-up/pizza-sign-up.component';
import { PizzaLogout } from './app/pages/pizza-logout/pizza-logout.component';

export const routes: Routes = [
    { path: '', component: CreatePizza },
    { path: 'login', component: PizzaLogin },
    { path: 'logout', component: PizzaLogout },
    { path: 'sign-up', component: PizzaSignUp },

    { path: 'pay', component: PizzaPay },
    { path: 'order', redirectTo: 'pay', pathMatch: 'full' },

    { path: 'about', component: PizzaAbout },
    { path: 'about-us', redirectTo: 'about', pathMatch: 'full' },

    { path: '**', redirectTo: '' }
];