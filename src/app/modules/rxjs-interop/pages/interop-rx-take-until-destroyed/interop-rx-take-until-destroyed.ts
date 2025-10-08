import { Component } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { interval, map } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-interop-rx-take-until-destroyed',
  imports: [...fromComponents.components, AsyncPipe],
  templateUrl: './interop-rx-take-until-destroyed.html',
  styleUrl: './interop-rx-take-until-destroyed.css'
})
export class InteropRxTakeUntilDestroyed {
  private ticker$ = interval(1000);

  //Hace que el observable se detenga automáticamente cuando el componente se destruye.
  readonly counter = this.ticker$.pipe(takeUntilDestroyed());
  readonly counterSignal = toSignal(this.ticker$.pipe(takeUntilDestroyed()));

  // Emite cada segundo y devuelve la hora formateada
 private timer$ = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString()),
    takeUntilDestroyed()
  );

  // Convierte el observable a signal reactivo (Angular 16+)
  readonly time = toSignal(this.timer$, { initialValue: new Date().toLocaleTimeString() });

//   Qué hace:

// interval(1000) → emite cada segundo.

// map(...) → transforma la emisión en una cadena de texto con la hora actual.

// takeUntilDestroyed() → detiene el stream automáticamente cuando el componente se destruye (sin fugas).

// toSignal() → convierte el observable en un Signal que puedes usar directamente en el template como una función reactiva ({{ time() }}).
  
 ngOnDestroy() {
    console.log('💥 ngOnDestroy Component');
  }
}
