import {provideRouter, RouterConfig} from '@angular/router'; 
import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

const routes: RouterConfig = [
    {   path:''
        , component: SearchComponent
    },
    {
         path: 'about'
         , component: AboutComponent 
    }
];

export const appRouterProviders = [
    provideRouter(routes);
]
