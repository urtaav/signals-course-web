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
                // Ruta 404 para páginas no encontradas
            {
                path: '**',
                loadChildren: () => import('../error/error.routes').then(m => m.ERROR_ROUTES),
                title: 'Página no encontrada'
            }
        ]

    }
];