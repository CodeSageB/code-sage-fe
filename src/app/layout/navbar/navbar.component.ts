import { Component } from '@angular/core';
import { LocalisationService } from '../../shared/services/localisation.service';
import { DrawerControlsService } from '../../shared/services/drawer-controls.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public localisation: LocalisationService,
    public drawerControls: DrawerControlsService,
  ) {}
}
