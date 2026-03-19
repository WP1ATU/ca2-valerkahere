import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { About } from './routes/about/about';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "about", component: About }
];
