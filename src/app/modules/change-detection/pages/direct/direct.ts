import { Component } from '@angular/core';
import { HeaderTitle } from '../../../../shared/components/header-title/header-title';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-direct',
  imports: [HeaderTitle,Card],
  templateUrl: './direct.html',
  styleUrl: './direct.css'
})
export class Direct {

}
