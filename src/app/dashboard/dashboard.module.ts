import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ThemeSwitcherModule } from '../shared/components/theme-switcher/theme-switcher.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { EnrollmentsModule } from './pages/enrollments/enrollments.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, ToolbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    ThemeSwitcherModule,
    MatListModule,
    SharedModule,
    DashboardRoutingModule,
    HomeModule,
    // EquiposModule,
    EnrollmentsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
