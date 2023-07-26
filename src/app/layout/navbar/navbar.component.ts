import { Component, OnInit } from '@angular/core';
import { LocalisationService } from '../../shared/services/localisation.service';
import { Observable } from 'rxjs';
import { LanguagesEnum } from '../../data/schema/languages.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //TODO předělat
  public kokos: Observable<LanguagesEnum>;

  constructor(public _localisation: LocalisationService) {
    this.kokos = _localisation.getActiveLanguage$;
  }

  ngOnInit() {
    console.log(this._localisation.getActiveLanguage());
  }
}
