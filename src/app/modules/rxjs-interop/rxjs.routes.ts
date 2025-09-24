import { Routes } from "@angular/router";
import { ROUTE_PATHS } from '@core/constants'; 

export const RXJS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./rxjs-interop').then(c => c.RxjsInterop),
        title: 'RxJS Interop',
        children: [
            { path: '', redirectTo: ROUTE_PATHS.RXJS.ROOT, pathMatch: 'full' },
            { path: ROUTE_PATHS.RXJS.TO_SIGNAL, loadComponent: () => import('./pages/interop-to-signal/interop-to-signal').then(c => c.InteropToSignal) },
            { path: ROUTE_PATHS.RXJS.TO_OBSERVABLE, loadComponent: () => import('./pages/interop-to-observable/interop-to-observable').then(c => c.InteropToObservable) },
            { path: ROUTE_PATHS.RXJS.RX_RESOURCE, loadComponent: () => import('./pages/interop-rx-resource/interop-rx-resource').then(c => c.InteropRxResource) },
            { path: ROUTE_PATHS.RXJS.TAKE_UNTIL_DESTROYED, loadComponent: () => import('./pages/interop-rx-take-until-destroyed/interop-rx-take-until-destroyed').then(c => c.InteropRxTakeUntilDestroyed) },
            { path: ROUTE_PATHS.RXJS.OUTPUT, loadComponent: () => import('./pages/interop-output/interop-output').then(c => c.InteropOutput) },
            { path: '**', redirectTo: `${ROUTE_PATHS.ERRORS.ROOT}/${ROUTE_PATHS.ERRORS.NOT_FOUND}` },
        ]
    }
];