import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, finalize, map, of, Subject, Subscription, takeUntil, tap } from 'rxjs';
@Component({
  selector: 'app-router-without-signal',
  imports: [
    ...fromComponents.components
  ],
  templateUrl: './router-without-signal.html',
  styleUrl:'./router-without-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterWithoutSignal implements OnInit, OnDestroy {
  userId!: number;
  showAnimation = false;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private subs = new Subscription();
  private destroy$ = new Subject<void>();

  
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        // Correctly chain takeUntil directly to the observable.
        takeUntil(this.destroy$)
      )
      .subscribe(pm => {
        this.userId = +pm.get('id')!;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  goNext() {
    // 1. Guard against multiple clicks while the animation is active.
    if (this.showAnimation) {
      return;
    }

    // 2. Activate the animation flag.
    this.showAnimation = true;

    // 3. Create a reactive pipeline to handle the delay and navigation.
    of(null).pipe(
      // Wait for the specified duration.
      delay(3000),
      // Perform the navigation logic inside the subscription.
      // The subscription callback fires after the delay completes.
      tap(() => {
        const nextUserId = this.userId + 1;
        this.router.navigateByUrl(`/routes/router-without-signals/${nextUserId}`);
        console.log('Navigation complete after delay.');
      }),
      takeUntil(this.destroy$),
      // The finalize operator ensures this code runs when the Observable completes,
      // whether the operation succeeded or failed.

      finalize(() => {
        this.showAnimation = false;
        console.log('Animation flag reset.');
      })
    ).subscribe(); // Start the pipeline.
  }
}