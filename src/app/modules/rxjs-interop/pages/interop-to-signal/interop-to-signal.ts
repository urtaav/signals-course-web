import { Component } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-interop-to-signal',
  imports: [...fromComponents.components],
  templateUrl: './interop-to-signal.html',
  styleUrl: './interop-to-signal.css'
})
export class InteropToSignal {
  private counter$ = interval(1000);

  readonly counter = toSignal(this.counter$, { initialValue: 0 });
}
