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
            {
                path: 'double-data-binding',
                loadChildren: () => import('../model/model.routes').then(m => m.MODEL_ROUTES),
                title: 'double-data-binding'
            },
            {
                path: 'queries',
                loadChildren: () => import('../queries/queries.routes').then(m => m.QUERIES_ROUTES),
                title: 'double-data-binding'
            },
            {
                path: 'routes',
                loadChildren: () => import('../router/router.routes').then(m => m.ROUTER_ROUTES),
                title: 'double-data-binding'
            },
            { path: '**', redirectTo: 'error/404' },
        ]

    }
];