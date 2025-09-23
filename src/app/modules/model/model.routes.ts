import { Routes } from "@angular/router";

export const MODEL_ROUTES: Routes = [
    {
        path:'',
        loadComponent: () => import('./model').then( c => c.Model),
        title: 'Model',
        children:[
            { path:'', redirectTo:'ng-model', pathMatch:'full'},
            { path: 'ng-model', loadComponent: () => import('./pages/ng-model/ng-model').then( c => c.NgModel)},
            { path: 'model-signals', loadComponent: () => import('./pages/model-signals/model-signals').then( c => c.ModelSignals)},
            { path: 'model-io-signals', loadComponent: () => import('./pages/model-io-signals/model-io-signals').then( c => c.ModelIoSignals)},
                  { path: '**', redirectTo: 'errors/404' },
        ]
    }
];