import { Component } from '@angular/core';
import { HeaderTitle } from '../../../../shared/components/header-title/header-title';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-signal',
  imports: [HeaderTitle,Card],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

}
