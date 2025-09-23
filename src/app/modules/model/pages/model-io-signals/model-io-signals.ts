import {
  ChangeDetectionStrategy,
  Component,
  effect,
  model,
  signal,
} from '@angular/core';
import * as fromComponents from '../../../../shared/components';
@Component({
  selector: 'app-child', // The selector the parent will use
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports:[
    ...fromComponents.components
  ],
  template: `
    <div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <div class="md:col-span-2 xl:col-span-4">
              <app-card>
                  <div class="space-y-4">
                      <div
                          class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-primary-500">

                          <div class="flex items-center  gap-2">
                              <app-button (buttonClick)="increment()" full impact="bold" tone="primary" shape="rounded"
                                  size="medium">
                              Increment from Child
                              </app-button>
                          </div>
                      </div>
                      <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-400">
                          <h3 class="font-medium mb-2 text-gray-700">Count :</h3>
                          <pre class="text-sm bg-white p-3 rounded border font-mono text-gray-800">{{ count() }}</pre>
                      </div>
                  </div>
              </app-card>
          </div>
    </div>
  `,
})
export class ChildComponent {
  // ✅ Replaces 'input' and 'output' with a single 'model()'.
  // 'model.required' indicates the parent MUST provide a value.
  readonly count = model.required<number>();

  constructor() {
    // ✅ The 'effect' still works the same, as 'count' is a Signal.
    effect(() => {
      console.log('🔄 [effect] Child count changed to', this.count());
    });
  }

  increment() {
    // ✅ Instead of emitting an event, the child updates the 'model' directly.
    // This change automatically propagates to the parent.
    this.count.update((v) => v + 1);
  }
}


@Component({
  selector: 'app-model-io-signals',
  imports: [...fromComponents.components, ChildComponent],
  templateUrl: './model-io-signals.html',
  styleUrl: './model-io-signals.css'
})
export class ModelIoSignals {
  // The parent's Signal remains the source of truth.
  count = signal(0);

  incrementCount() {
    this.count.update((v) => v + 1);
  }

  // ❌ The 'onIncrement()' event handler method is no longer needed and has been removed.
}
