import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { HeaderTitle } from "../../../../shared/components/header-title/header-title";

@Component({
  selector: 'app-test',
  imports: [Card, HeaderTitle],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {

}
