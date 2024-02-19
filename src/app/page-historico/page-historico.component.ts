import { Component } from '@angular/core';
import { SectionAcontComponent } from './section-acont/section-acont.component';
import { SectionHistoricoImcComponent } from './section-historico-imc/section-historico-imc.component';
import { SectionHistoricoPesoComponent } from './section-historico-peso/section-historico-peso.component';


@Component({
  selector: 'app-page-historico',
  standalone: true,
  imports: [SectionAcontComponent,SectionHistoricoImcComponent,SectionHistoricoPesoComponent],
  templateUrl: './page-historico.component.html',
  styleUrl: './page-historico.component.scss'
})
export class PageHistoricoComponent {

}
