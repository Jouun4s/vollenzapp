import { Component } from '@angular/core';
import { SectionContaComponent } from './section-conta/section-conta.component';
import { SectionGraficoComponent } from './section-grafico/section-grafico.component';
import { SectionHistoricoComponent } from './section-historico/section-historico.component';
import { SectionImcComponent } from './section-imc/section-imc.component';
import { SectionSliderComponent } from './section-slider/section-slider.component';
import { SectionPesoComponent } from './section-peso/section-peso.component';


@Component({
  selector: 'app-page-medidas',
  standalone: true,
  imports: [SectionContaComponent, SectionGraficoComponent, SectionHistoricoComponent, SectionImcComponent,SectionSliderComponent, SectionPesoComponent],
  templateUrl: './page-medidas.component.html',
  styleUrl: './page-medidas.component.scss'
})
export class PageMedidasComponent {

}
