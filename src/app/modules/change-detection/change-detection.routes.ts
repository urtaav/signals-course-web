import { Routes } from "@angular/router";

export const CHANGEDETECTION_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./change-detection').then(m => m.ChangeDetection),
        title: 'Change Detection',
        children: [
            { path: '', redirectTo: 'default-change-detection-indirect', pathMatch: 'full' },
            { path: 'default-change-detection-indirect', loadComponent: () => import('./pages/indirect/indirect').then(m => m.Indirect) },
            { path: 'default-change-detection-direct', loadComponent: () => import('./pages/direct/direct').then(m => m.Direct) },
            { path: 'onpush-change-detection', loadComponent: () => import('./pages/onpush/onpush').then(m => m.Onpush) },
            { path: 'signal-change-detection', loadComponent: () => import('./pages/signal/signal').then(m => m.Signal) },
            { path: '**', redirectTo: 'errors/404' },
        ]
    }
]