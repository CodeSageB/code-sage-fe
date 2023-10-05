import { MenuItem } from '../schema/menu-item';

export class Utils {
  public static readonly MENU_ITEMS: MenuItem[] = [
    { name: 'home', url: '' },
    { name: 'blog', url: '/blogs' },
    { name: 'about' },
    { name: 'newsletter', color: 'primary' },
  ];
}
