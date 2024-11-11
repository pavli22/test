import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartConfiguration, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-radar-chart',
  standalone:true,
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createRadarChart();
  }

  createRadarChart(): void {
    const canvas = document.getElementById('myRadarChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (!ctx) {
      console.error("Canvas context is null");
      return;
    }

    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      datasets: [{
        label: 'Data Set 1',
        data: [20, 10, 4, 2, 8],
        backgroundColor: 'rgba(78, 115, 223, 0.5)',
        borderColor: 'rgba(78, 115, 223, 1)',
        borderWidth: 1
      }]
    };

    const config = {
      type: 'radar',
      data: data,
      options: {
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 20
          }
        }
      } as ChartOptions // Make sure to specify the type here
    } as ChartConfiguration; // Add a type for config

    new Chart(ctx, config);
  }
}