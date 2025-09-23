import { Component } from '@angular/core';
import * as fromComponents from '../../../../shared/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  imports: [
        ...fromComponents.components,
        FormsModule
  ],
  templateUrl: './ng-model.html',
  styleUrl: './ng-model.css'
})
export class NgModel {
  name: string = '';

}
