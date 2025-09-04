export interface MenuItem {
  group: string;
  separator?: boolean;
  selected?: boolean;
  active?: boolean;
  items: Array<SubMenuItem>;
}

export interface SubMenuItem {
  icon?: string;
  label?: string;
  route?: string | null;
  expanded?: boolean;
  active?: boolean;
  children?: Array<SubMenuItem>;
}

export interface MenuItemNavbar {
  id: string;
  group: string;
  title?: string;
  route?: string;
  href?: string;
  icon?: string;
  selected?: boolean;
  active?: boolean;
  exact?: boolean;
  isExternal?: boolean;
  target?: '_blank' | '_self';
  queryParams?: { [key: string]: any };
  fragment?: string;
  order?: number;
  visible?: boolean;
}