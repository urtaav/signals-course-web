import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
@Component({
  selector: 'app-decorator',
  imports: [
    ...fromComponents.components
  ],
  templateUrl: './decorator.html',
  styleUrl: './decorator.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Decorator implements AfterViewInit {

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  value = '';

  ngAfterViewInit(): void {
    // ❌ Must wait for view init before inputRef is ready
    console.log('Input element is ready:', this.inputRef);
  }
  readValue() {
    // ❌ Manual read + manual change‑detection
    this.value = this.inputRef.nativeElement.value;
    this.cdr.markForCheck();
  }
}
