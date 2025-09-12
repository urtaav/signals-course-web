import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { CommonModule, NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { SidebarSubmenu } from '../sidebar-submenu/sidebar-submenu';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar-menu',
  imports: [CommonModule, NgClass, AngularSvgIconModule, RouterLink, SidebarSubmenu],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css'
})
export class SidebarMenu implements OnInit {
  public menuService: MenuService = inject(MenuService);
  private router: Router = inject(Router);
  private _subscription = new Subscription();

  ngOnInit(): void {
    // Expandir menú basado en la ruta actual al inicializar
    setTimeout(() => {
      this.expandMenuBasedOnCurrentRoute();
    }, 0);

    // Suscribirse a cambios de ruta para expandir automáticamente
    this._subscription.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          console.log("NavigationEnd", event.urlAfterRedirects);
          this.expandMenuBasedOnCurrentRoute();
        })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  /**
   * Expande el menú basado en la ruta actual
   */
  private expandMenuBasedOnCurrentRoute(): void {

    // Trabajar directamente con el signal del servicio
    const currentMenu = this.menuService.pagesMenu;

    const updatedMenu = currentMenu.map((menuGroup) => {
      return {
        ...menuGroup,
        items: menuGroup.items.map((item) => {
          // Verificar si este item o alguno de sus children está activo
          const isItemActive = this.isItemOrChildrenActive(item);

          return {
            ...item,
            expanded: isItemActive,
          };
        }),
      };
    });

    // Actualizar el signal del servicio
    this.menuService.updatePagesMenu(updatedMenu);
  }

  /**
   * Verifica si un item del menú o alguno de sus hijos está activo
   */
  private isItemOrChildrenActive(item: any): boolean {
    // Verificar si el item actual está activo
    if (item.route && this.isActive(item.route)) {
      return true;
    }

    // Verificar recursivamente en los children si existen
    if (item.children && Array.isArray(item.children)) {
      return item.children.some((child: any) => this.isItemOrChildrenActive(child));
    }

    return false;
  }

  public isActive = (instruction: any): boolean => this.menuService.isActive(instruction);
}