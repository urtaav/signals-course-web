import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard').then(m => m.Dashboard),
        title: 'Dashboard Principal',
        children: [
            {
                path: '',
                redirectTo: 'test',
                pathMatch: 'full'
            },
            {
                path: 'test',
                loadComponent: () => import('./pages/test/test').then(m => m.Test),
            },
            { path: '**', redirectTo: 'errors/404' },
        ]
    },
];