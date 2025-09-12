import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  signal,
} from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { HeaderTitle } from '../../../../shared/components/header-title/header-title';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-counter-signal',
  imports: [Button,HeaderTitle,Card],
  templateUrl: './counter-signal.html',
  styleUrl: './counter-signal.css'
})
export class CounterSignal {
  count0: number = 0;
  readonly count1:WritableSignal<number> = signal<number>(0); //A signal that can be updated directly.
  readonly count2: Signal<number> = this.count1.asReadonly(); // A signal that provides read-only access to the state.

  increment = () => {
    console.log("Udating counter...");
    this.count0 += 1;

    // How It Works
    // The count1 signal is writable and can be updated using the update method.
    // The count2 signal is a readonly version of count1, ensuring immutability for consumers.


       //this.count1.set(this.count1() + 1);
    this.count1.update((currentValue) => currentValue + 1);
      //this.count2.set(this.count2() + 1); // This will not trigger change detection since count2 is a readonly signal
    //this.count2.update(this.count2() + 1); // This will trigger change detection since count2 is a signal
  }
}
