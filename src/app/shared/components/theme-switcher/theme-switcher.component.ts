import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  isDarkThemeActive = false;

  // Cambio tema Dia / Noche
  onChange(newValue: boolean): void {
    console.log(newValue);
  }
}
