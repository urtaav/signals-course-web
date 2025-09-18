import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Button } from '../../../../shared/components';

@Component({
  selector: 'app-error404',
  imports: [AngularSvgIconModule, Button],
  templateUrl: './error404.html',
  styleUrl: './error404.css'
})
export class Error404 {
  private router: Router = inject(Router);
  
  goToHomePage() {
    this.router.navigate(['/']);
  }
}
