import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThemeSwitcherComponent],
  imports: [CommonModule, MatSlideToggleModule, FormsModule, MatIconModule],
  exports: [ThemeSwitcherComponent],
})
export class ThemeSwitcherModule {}
