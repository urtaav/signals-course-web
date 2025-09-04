import { Component, inject, input } from '@angular/core';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { MenuService } from '../../../services/menu';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar-submenu',
  imports: [NgClass, CommonModule, RouterLink, AngularSvgIconModule, RouterLinkActive],
  templateUrl: './sidebar-submenu.html',
  styleUrl: './sidebar-submenu.css'
})
export class SidebarSubmenu {
  public submenu = input.required<SubMenuItem>({});
  public menuService: MenuService = inject(MenuService);

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
