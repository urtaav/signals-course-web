import { Routes } from "@angular/router";

export const QUERIES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./queries').then(c => c.Queries),
        title: 'Queries',
        children: [
            { path: '', redirectTo: 'decorator', pathMatch: 'full' },
            { path: 'decorator', loadComponent: () => import('./pages/decorator/decorator').then(c => c.Decorator) },
            { path: 'signals', loadComponent: () => import('./pages/signals/signals').then(c => c.Signals) },
        ]
    }
];