import { Component } from '@angular/core';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RadarChartComponent, BarChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  menuToggel: boolean = false

  ShowMenu() {
    this.menuToggel = !this.menuToggel;
  }
}
