import { Component } from '@angular/core';
import { DrawerControlsService } from '../../shared/services/drawer-controls.service';
import { Utils } from '../../shared/tools/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public readonly MENU_ITEMS = Utils.MENU_ITEMS;

  constructor(public drawerControls: DrawerControlsService) {}
}
