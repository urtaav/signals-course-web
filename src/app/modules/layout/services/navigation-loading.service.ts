import { inject, Injectable, signal } from "@angular/core";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, filter, map, startWith } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class NavigationLoadingService {
    private router = inject(Router);

    readonly isLoading = toSignal(
        this.router.events.pipe(
            filter(event =>
                event instanceof NavigationStart ||
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError
            ),
            map(event => event instanceof NavigationStart),
            startWith(false)
        ),
        { initialValue: false }
    );

    // Signal for the current Route 
    readonly currentURL = toSignal(
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(event => (event as NavigationEnd).urlAfterRedirects),
            startWith(this.router.url)
        ),
        { initialValue: this.router.url }
    );

    private _progress = signal(0);
    readonly progress = this._progress.asReadonly();


    constructor() {
        this.setupProgressSimulation();
    }

    private setupProgressSimulation(): void {
        let progressInterval: any;

        this.router.events.pipe(
            filter(event =>
                event instanceof NavigationStart ||
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError
            )
        ).subscribe(event => {
            if (event instanceof NavigationStart) {
                this._progress.set(0);
                let currenProgress = 0;
                progressInterval = setInterval(() => {
                    currenProgress += Math.random() * 15 + 5;
                    if (currenProgress >= 90) {
                        currenProgress = 90;
                        clearInterval(progressInterval)
                    }
                    this._progress.set(Math.min(currenProgress, 90));
                }, 100)
            } else {
                // Progress complete
                clearInterval(progressInterval);
                this._progress.set(100);
                setTimeout(() => this._progress.set(0), 200);
            }
        })
    }
}