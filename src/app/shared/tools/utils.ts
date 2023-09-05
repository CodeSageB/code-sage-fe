import { MenuItem } from '../schema/menu-item';

export class Utils {
  public static readonly MENU_ITEMS: MenuItem[] = [
    { name: 'home' },
    { name: 'blog' },
    { name: 'about' },
    { name: 'newsletter', color: 'primary' },
  ];
}
