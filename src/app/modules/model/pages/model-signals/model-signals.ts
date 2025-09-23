import { Component, model } from '@angular/core';

import * as fromComponents from '../../../../shared/components';
@Component({
  selector: 'app-model-signals',
  imports: [
    ...fromComponents.components,
  ],
  templateUrl: './model-signals.html',
  styleUrl: './model-signals.css'
})
export class ModelSignals {
  name = model(''); // You need a parent component to provide the model in other case is undefined

  onInput(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input) this.name.set(input.value);
  }
}
