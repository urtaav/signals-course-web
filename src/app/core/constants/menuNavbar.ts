import { MenuItemNavbar } from "../models/menu.model";

export const PAGES_MENU: MenuItemNavbar[] = [
  {
    id: 'home',
    group: 'Inicio',
    route: '/dashboard/test',
    icon: 'fas fa-home',
    selected: false,
    active: false,
    exact: true,
    order: 1,
    visible: true
  },

  {
    id: 'services',
    group: 'Servicios',
    title: 'Nuestros servicios',
    route: '/services',
    icon: 'fas fa-cogs',
    selected: false,
    active: false,
    exact: false,
    order: 3,
    visible: true
  },
    {
    id: 'about',
    group: 'Acerca de',
    title: 'Conoce más sobre nosotros',
    route: '/about',
    icon: 'fas fa-info-circle',
    selected: false,
    active: false,
    exact: false,
    order: 2,
    visible: true
  },

  {
    id: 'external-docs',
    group: 'Documentación',
    title: 'Documentación externa',
    href: 'https://docs.example.com',
    icon: 'fas fa-book',
    isExternal: true,
    target: '_blank',
    order: 8,
    visible: true
  }
];
