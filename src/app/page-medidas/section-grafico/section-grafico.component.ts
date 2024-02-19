
import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-section-grafico',
  standalone: true,
  imports: [ChartModule,FormsModule],
  templateUrl: './section-grafico.component.html',
  styleUrl: './section-grafico.component.scss'
})
export class SectionGraficoComponent implements OnInit {

  data: any;

  options: any;

  ngOnInit() {
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





