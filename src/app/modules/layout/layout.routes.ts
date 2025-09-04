import { Routes } from "@angular/router"
export const LAYOUT_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout').then(m => m.Layout),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                 loadChildren: () => import('../dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
                title: 'Dashboard'
            },
            {
                path: 'change-detection',
                 loadChildren: () => import('../change-detection/change-detection.routes').then(m => m.CHANGEDETECTION_ROUTES),
                title: 'Change Detection'
            },
             { path: '**', redirectTo: 'error/404' },
        ]

    }
];