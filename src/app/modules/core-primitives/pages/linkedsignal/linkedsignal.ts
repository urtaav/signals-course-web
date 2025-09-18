import { ChangeDetectionStrategy, Component, linkedSignal, signal, WritableSignal } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-linkedsignal',
  imports: [
    ...fromComponents.components,
    JsonPipe
  ],
  templateUrl: './linkedsignal.html',
  styleUrl: './linkedsignal.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Linkedsignal {
  // 1️⃣ Two independent base signals for x and y
  readonly x: WritableSignal<number> = signal(0);
  readonly y: WritableSignal<number> = signal(0);

  // 2️⃣ linkedSignal (single-computation overload) returns a WritableSignal<{ x,y}>
  readonly point: WritableSignal<{ x: number; y: number }> = linkedSignal(() => ({
    x: this.x(),
    y: this.y()
  }));

  // 3️⃣  Simulate two "clicks" ocurring at almost the same time
  moveConcurrently = (dx: number, dy: number) => {
    const updater = () => this.point.update(({ x, y }) => ({ x: x + dx, y: y + dy }));

    setTimeout(updater, Math.random() * 1000);
    setTimeout(updater, Math.random() * 1000);
  }

  // 4️⃣ Private helper that uses the linkedSignal API atomically
  /*    private move(dx: number, dy: number) {
       // point.update(...) reads {x,y}, applies the function, and writes both back atomically
       this.point.update(({ x, y }) => ({
         x: x + dx,
         y: y + dy
       }));
     } */
}
