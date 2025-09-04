import { Component, inject } from '@angular/core';
import { MenuService } from '../../../services/menu';
import { NgClass } from '@angular/common';
import { MenuItem, MenuItemNavbar } from '../../../../../core/models/menu.model';
import { NavbarSubmenu } from '../navbar-submenu/navbar-submenu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PAGES_MENU } from '../../../../../core/constants/menuNavbar';

@Component({
  selector: 'app-navbar-menu',
  imports: [NgClass, NavbarSubmenu,RouterLink,RouterLinkActive],
  templateUrl: './navbar-menu.html',
  styleUrl: './navbar-menu.css'
})
export class NavbarMenu {
  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];


  private _pagesMenu: MenuItemNavbar[] = [...PAGES_MENU];

   get pagesMenu(): MenuItemNavbar[] {
    return this._pagesMenu;
   }


}
