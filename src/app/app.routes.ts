import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/layout/layout.routes').then(m => m.LAYOUT_ROUTES)
    },
       { path: '**', redirectTo: 'errors/404' },
];
