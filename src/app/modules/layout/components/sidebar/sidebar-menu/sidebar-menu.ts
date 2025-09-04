import { Component, inject } from '@angular/core';
import { MenuService } from '../../../services/menu';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { CommonModule, NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { SidebarSubmenu } from '../sidebar-submenu/sidebar-submenu';

@Component({
  selector: 'app-sidebar-menu',
  imports: [CommonModule, NgClass,AngularSvgIconModule,RouterLink,SidebarSubmenu],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css'
})
export class SidebarMenu {
  public menuService: MenuService = inject(MenuService);
  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}
