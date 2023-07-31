import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { DrawerControlsService } from '../../services/drawer-controls.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';
import { Utils } from '../../tools/utils';

@Component({
  selector: 'app-menu-drawer',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    RouterOutlet,
    TranslateModule,
    LanguageSwitchComponent,
  ],
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.scss'],
})
export class MenuDrawerComponent implements AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;

  public readonly MENU_ITEMS = Utils.MENU_ITEMS;

  public mobileQuery!: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private _drawerControls: DrawerControlsService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _media: MediaMatcher,
  ) {
    this.mobileQuery = _media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this._drawerControls.setMobileQuery(this.mobileQuery);
  }

  ngAfterViewInit(): void {
    this._drawerControls.setDrawer(this.drawer);
    this._drawerControls.setMobileQuery(this.mobileQuery);
  }
}
