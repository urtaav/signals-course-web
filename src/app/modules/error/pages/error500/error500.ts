import { Component, inject } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Button } from '../../../../shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error500',
  imports: [AngularSvgIconModule, Button],
  templateUrl: './error500.html',
  styleUrl: './error500.css'
})
export class Error500 {
  private router: Router = inject(Router);

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
