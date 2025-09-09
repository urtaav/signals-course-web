import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child {
  user = input.required<{ name: string,age:number, email:string }>();

  ngOnChanges() {
    console.log('ChildComponent ngOnChanges');
  }

  ngDoCheck() {
    console.log('ChildComponent ngDoCheck');
  }
}
