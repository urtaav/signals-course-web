import { Routes } from "@angular/router";

export const INPUT_OUTPUT_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./input-output').then(c => c.InputOutput),
        title: 'Input / Output',
        children: [
            { path: '', redirectTo: 'decorator', pathMatch: 'full' },
            { path: 'decorator', loadComponent: () => import('./pages/decorator/decorator').then(c => c.Decorator) },
            { path: 'signals', loadComponent: () => import('./pages/signal/signal').then(c => c.Signal) },
            { path: '**', redirectTo: 'errors/404' },
        ]
    }
];