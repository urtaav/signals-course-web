import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
@Component({
  selector: 'app-child-decorator',
  imports: [
    ...fromComponents.components
  ],
  templateUrl: './child-decorator.html',
  styleUrl: './child-decorator.css'
})
export class ChildDecorator implements OnChanges {
  @Input() count!: number;

  @Output() increment = new EventEmitter<void>();

  ngOnChanges(ch: SimpleChanges) {
    // ❌ Lifecycle hook needed just to detect updates
    console.log('🔄 [ngOnChanges] count changed to', this.count);
  }

  notify() {
    // ❌ Manual emit call
    this.increment.emit();
  }
}
