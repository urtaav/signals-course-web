import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild
} from '@angular/core';
import * as fromComponents from '../../../../shared/components';
@Component({
  selector: 'app-signals',
  imports: [    ...fromComponents.components],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  readonly inputRef = viewChild('inputRef', { read: ElementRef });

  readonly value =  signal(''); 

  onInput(event: Event): void {
     const inputElement = this.inputRef();
     if(inputElement) this.value.set(inputElement.nativeElement.value);
  }
}
