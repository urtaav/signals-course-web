import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import { MenuItem, SubMenuItem } from '../../../core/models/menu.model';
import { Menu } from '../../../core/constants/menu';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {
  private _showSidebar = signal(true);
  private _showMobileMenu = signal(false);
  private _pagesMenu = signal<MenuItem[]>([]);
  private _subscription = new Subscription();

  private router: Router = inject(Router);

  constructor() {
    /** Set dynamic menu */
    this._pagesMenu.set(Menu.pages);
  }

  get showSideBar() {
    return this._showSidebar();
  }
  get showMobileMenu() {
    return this._showMobileMenu();
  }
  get pagesMenu() {
    return this._pagesMenu();
  }
  set showSideBar(value: boolean) {
    this._showSidebar.set(value);
  }
  set showMobileMenu(value: boolean) {
    this._showMobileMenu.set(value);
  }

  public toggleSidebar() {
    this._showSidebar.set(!this._showSidebar());
  }
  public toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  public toggleMenu(menu: SubMenuItem) {
    this.showSideBar = true;

    /** collapse all submenus except the selected one. */
    const updatedMenu = this._pagesMenu().map((menuGroup) => {
      return {
        ...menuGroup,
        items: menuGroup.items.map((item) => {
          return {
            ...item,
            expanded: item === menu ? !item.expanded : false,
          };
        }),
      };
    });

    this._pagesMenu.set(updatedMenu);
  }

  private expand(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    });
  }

  public isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
