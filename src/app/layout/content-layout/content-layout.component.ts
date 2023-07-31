import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerControlsService } from '../../shared/services/drawer-controls.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;

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
