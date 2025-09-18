import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { ChildDecorator } from '../../components/child-decorator/child-decorator';
@Component({
  selector: 'app-decorator',
  imports: [
        ...fromComponents.components,
        ChildDecorator
  ],
  templateUrl: './decorator.html',
  styleUrl: './decorator.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Decorator {
  count:number = 0;

  incrementCount = () => {
    this.count++;
  }

  onIncrement = () => {
    console.log("Child requested increment");
    this.count++;
  }
}
 