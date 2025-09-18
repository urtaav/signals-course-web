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
            {
                path: 'core-primitives',
                 loadChildren: () => import('../core-primitives/core-primitives.routes').then(m => m.COREPRIMITIVES_ROUTES),
                title: 'Core primitives'
            },
            {
                path: 'input-ouput',
                 loadChildren: () => import('../input-output/input-output.routes').then(m => m.INPUT_OUTPUT_ROUTES),
                title: 'input-ouput'
            },
             { path: '**', redirectTo: 'error/404' },
        ]

    }
];