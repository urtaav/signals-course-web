import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../../../core/models/menu.model';
import { Menu } from '../../../core/constants/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _pagesMenu = signal<MenuItem[]>([]);

  constructor() {
    /** Set dynamic menu */
    this._pagesMenu.set(Menu.pages);
  }

  get pagesMenu() {
    return this._pagesMenu();
  }
}
