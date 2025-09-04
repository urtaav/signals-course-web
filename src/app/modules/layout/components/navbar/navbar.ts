import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMenu } from './navbar-menu/navbar-menu';

@Component({
  selector: 'app-navbar',
  imports: [AngularSvgIconModule,NavbarMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
