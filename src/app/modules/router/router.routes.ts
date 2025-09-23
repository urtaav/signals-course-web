import { Routes } from "@angular/router";

export const ROUTER_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./router').then(c => c.Router),
        title: 'Router',
        children: [
            { path: '', redirectTo: 'router-without-signals/:id', pathMatch: 'full' },
            { path: 'router-without-signals/:id', loadComponent: () => import('./pages/router-without-signal/router-without-signal').then(c => c.RouterWithoutSignal) },
            { path: 'router-signals/:id', loadComponent: () => import('./pages/router-signal/router-signal').then(c => c.RouterSignal) },
            { path: '**', redirectTo: 'errors/404' },
        ]
    }
];