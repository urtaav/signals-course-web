import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';
import { MenuService } from '../../services/menu';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass,AngularSvgIconModule,SidebarMenu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  public version:any = "0.0.1";

  public menuService:MenuService = inject(MenuService);

  public toggleSidebar = () => {
    this.menuService.toggleSidebar();
  }
}
