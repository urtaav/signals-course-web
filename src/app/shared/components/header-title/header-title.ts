import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  imports: [],
  templateUrl: './header-title.html',
  styleUrl: './header-title.css'
})
export class HeaderTitle {
  title = input.required<String>();
  subTitle = input<String>();
}
