import { MenuItem } from '../../data/schema/menu-item';

export class Utils {
  public static readonly MENU_ITEMS: MenuItem[] = [
    { name: 'home' },
    { name: 'about' },
    { name: 'blog' },
    { name: 'newsletter', color: 'primary' },
  ];
}
