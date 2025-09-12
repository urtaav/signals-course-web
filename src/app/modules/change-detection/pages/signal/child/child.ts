import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child {
  user = input.required<{name: string}>();

  // 🔄 Local component state managed by signal
  counter = signal(0);

  increment = () => {
    this.counter.update(count => count + 1);
  }

  ngDoCheck(){
    console.log("ChildComponent CD cycle");
  }
}
