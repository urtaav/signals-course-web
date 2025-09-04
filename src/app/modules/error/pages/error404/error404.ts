import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-error404',
  imports: [AngularSvgIconModule],
  templateUrl: './error404.html',
  styleUrl: './error404.css'
})
export class Error404 {
  private router: Router = inject(Router);
  
  goToHomePage() {
    this.router.navigate(['/']);
  }
}
