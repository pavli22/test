import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('barChart', { static: false }) barChartRef!: ElementRef;

  ngAfterViewInit(): void {
    new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Station Name\nDummy 1',
          'Station Name\nDummy 1',
          'Station Name\nDummy 1',
          'Station Name\nDummy 1',
          'Station Name\nDummy 1'
        ],
        datasets: [{
          label: 'Sales',
          data: [250, 100, 150, 200, 100],
          backgroundColor: 'rgba(255, 112, 67, 0.8)',
          hoverBackgroundColor: 'rgba(255, 112, 67, 1)',
          barThickness: 11
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 12
              },
              color: '#424242'
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#424242',
              font: {
                size: 10
              },
              stepSize: 50
            },
            grid: {
              color: '#e0e0e0'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
        }
      }
    });
  }
}
