import { Routes } from "@angular/router";
import { Error404 } from "./pages/error404/error404";
import { Error500 } from "./pages/error500/error500";

export const ERROR_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./error').then(m => m.Error),
        children: [
            {
                path: '', redirectTo: '404',
                pathMatch: 'full'
            },
            {
                path: '404',
                component: Error404,
                title: 'Error 404 - Página no encontrada'
            },
            {
                path: ' 500',
                component: Error500,
                title: 'Error 500 - Error del servidor'
            }
        ]
    }
]