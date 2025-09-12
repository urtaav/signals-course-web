import { Routes } from "@angular/router";

export const COREPRIMITIVES_ROUTES: Routes = [
    {
        path:'',
        loadComponent: () => import('./core-primitives').then(m => m.CorePrimitives),
        title:'Counter signals',
        children:[
            { path:'', redirectTo:'counter-signal', pathMatch:'full'},
            { path: 'counter-signal', loadComponent:() => import('./pages/counter-signal/counter-signal').then(m => m.CounterSignal)},
            { path: 'counter-effect', loadComponent:() => import('./pages/counter-effect-signal/counter-effect-signal').then(m => m.CounterEffectSignal)},
            { path: 'linkedSignal', loadComponent:() => import('./pages/linkedsignal/linkedsignal').then(m => m.Linkedsignal)},
            { path: 'linkedSignal-race', loadComponent:() => import('./pages/linkedsignal-race/linkedsignal-race').then(m => m.LinkedsignalRace)},
            { path: '**', redirectTo: 'errors/404' },
        ]
    }
];