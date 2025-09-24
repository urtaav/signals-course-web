import { Component, signal } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-interop-to-observable',
  imports: [...fromComponents.components, AsyncPipe],
  templateUrl: './interop-to-observable.html',
  styleUrl: './interop-to-observable.css'
})
export class InteropToObservable {
  readonly value = signal(0);

  readonly value$ = toObservable(this.value);
}
