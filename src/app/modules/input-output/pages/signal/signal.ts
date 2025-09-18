import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { ChildSignals } from "../../components/child-signals/child-signals";
@Component({
  selector: 'app-signal',
  imports: [
    ...fromComponents.components,
    ChildSignals
],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Signal {
  // ✅ WritableSignal: exposes .set() and .update(), reactive by default
  count = signal(0);

  incrementCount() {
    this.count.update(v => v + 1);
  }

  onIncrement() {
    console.log('🔔 [Signal] Child requested increment');
    this.incrementCount();
  }
}
