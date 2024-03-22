import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-page-medidas',
  standalone: true,
  imports: [ChartModule,FormsModule, ButtonModule, RouterModule],
  templateUrl: './page-medidas.component.html',
  styleUrl: './page-medidas.component.scss'
})
export class PageMedidasComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    
  }

  value: any

  data: any;

  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--surface-300');
      const textColorSecondary = documentStyle.getPropertyValue('--surface-300');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-300');

      this.data = {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'jun', 'Jul'],
          datasets: [
              {
                  label: 'Histórico',
                  data: [65, 59, 20, 81, 56, 55, 40],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--orange-500'),
                  tension: 0.5
              },     
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 1,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,  
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false,
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };

 }
}
