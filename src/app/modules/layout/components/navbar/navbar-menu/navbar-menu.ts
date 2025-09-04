import { Component, inject } from '@angular/core';
import { MenuService } from '../../../services/menu';
import { NgClass } from '@angular/common';
import { MenuItem } from '../../../../../core/models/menu.model';
import { NavbarSubmenu } from '../navbar-submenu/navbar-submenu';

@Component({
  selector: 'app-navbar-menu',
  imports: [NgClass, NavbarSubmenu],
  templateUrl: './navbar-menu.html',
  styleUrl: './navbar-menu.css'
})
export class NavbarMenu {
  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];


  menuService: MenuService = inject(MenuService);

  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }
  public mouseEnter(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.hideMenuClass.forEach((c) => element.classList.remove(c));
      this.showMenuClass.forEach((c) => element.classList.add(c));
    }
  }

  public mouseLeave(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.showMenuClass.forEach((c) => element.classList.remove(c));
      this.hideMenuClass.forEach((c) => element.classList.add(c));
    }
  }

}
