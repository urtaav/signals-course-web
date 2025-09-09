import { Component } from '@angular/core';
import { HeaderTitle } from '../../../../shared/components/header-title/header-title';
import { Card } from '../../../../shared/components/card/card';
import { Child } from './child/child';
import { JsonPipe } from '@angular/common';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-onpush',
  imports: [HeaderTitle,Card,Child, JsonPipe,Button,],
  templateUrl: './onpush.html',
  styles: [`

  `]
})
export class Onpush {
  user = { name: 'John Doe', age: 30, email: 'john@example.com' };

  mutateUser = () => {
   // Esta mutación NO actualizará un componente hijo con OnPush
    // porque mantiene la misma referencia del objeto
    this.user.name = this.user.name === 'John Doe' 
      ? 'Jane Doe (Mutated)' 
      : 'John Doe';
    
    console.log('🔧 User mutated (same reference):', this.user);
  }

  replaceUser = () => {
    // Este reemplazo SÍ actualizará un componente hijo con OnPush
    // porque crea una nueva referencia del objeto
    this.user = {
      ...this.user,
      name: this.user.name === 'John Doe' 
        ? 'Jane Doe (Replaced)' 
        : 'John Doe'
    };
    
    console.log('🔄 User replaced (new reference):', this.user);
  }
}
