import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderTitle } from '../../../../shared/components/header-title/header-title';
import { Card } from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';
import { Child } from './child/child';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signal',
  imports: [HeaderTitle,Card, Button,Child, JsonPipe],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signal {
  userSignal =  signal({ name: 'Angular'});

  changeUser = () => {
    this.userSignal.set( { name: 'Angular v20' +  Math.random().toFixed(2)});
  }

}
