import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableLangsPipe } from '../../pipes/available-langs.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { LocalisationService } from '../../services/localisation.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [
    CommonModule,
    AvailableLangsPipe,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
  ],
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  constructor(public localisation: LocalisationService) {}
}
