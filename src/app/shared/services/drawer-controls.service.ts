import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class DrawerControlsService {
  private _drawer: MatDrawer;

  private _mobileQuery!: MediaQueryList;

  public setDrawer(drawer: MatDrawer): void {
    this._drawer = drawer;
  }

  public setMobileQuery(mQuery: MediaQueryList): void {
    this._mobileQuery = mQuery;
  }

  public mobileQueryMatches(): boolean {
    return this._mobileQuery?.matches ?? false;
  }

  public toggleDrawer(): void {
    this._drawer.toggle();
  }
}
