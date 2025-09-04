import { Component } from '@angular/core';
import { HeaderTitle } from '../../../../shared/components/header-title/header-title';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-indirect',
  imports: [HeaderTitle,Card],
  templateUrl: './indirect.html',
  styleUrl: './indirect.css'
})
export class Indirect {

}
