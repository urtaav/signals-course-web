import { ChangeDetectionStrategy, Component, inject, input, numberAttribute, OnDestroy } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { Router } from '@angular/router';
import { delay, finalize, of, Subject, takeUntil, tap } from 'rxjs';
@Component({
  selector: 'app-router-signal',
  imports: [
    ...fromComponents.components
  ],
  templateUrl: './router-signal.html',
  styleUrl: './router-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterSignal implements OnDestroy {
  // ✅ Route parameter "id" bound as a signal
  readonly id = input(0, { transform: numberAttribute });

  private router = inject(Router);
  showAnimation = false;
  private destroy$ = new Subject<void>();

  goNext() {

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
        this.router.navigateByUrl(`/routes/router-signals/${+(this.id() ?? 0) + 1}`);
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


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
