import { Component, effect, input, output } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
@Component({
  selector: 'app-child-signals',
  imports: [
    ...fromComponents.components
  ],
  templateUrl: './child-signals.html',
  styleUrl: './child-signals.css'
})
export class ChildSignals {
  // InputSignal: automatically updates when parent signal changes
  readonly count = input<number>();

  // SignalEmitterRef: Lightweight alternative to Eventemitter
  readonly increment = output<void>();

  constructor() {
    //Automatic dependency tracking: no ngOnChanges needed
    effect(() => {
      console.log(" [effect] count changed to", this.count());
    });
  }

  notify = () => {
    // emit like a signal, integrates with Angular reactivity
    this.increment.emit();
  }
}
