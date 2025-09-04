import { Component, ElementRef, input, viewChild } from '@angular/core';
import { SubMenuItem } from '../../../../../core/models/menu.model';

@Component({
  selector: 'div[navbar-submenu]',
  imports: [],
  templateUrl: './navbar-submenu.html',
  styleUrl: './navbar-submenu.css'
})
export class NavbarSubmenu {
    public submenu = input<SubMenuItem[]>();

    
}
