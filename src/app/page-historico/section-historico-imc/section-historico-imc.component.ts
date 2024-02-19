import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-section-historico-imc',
  standalone: true,
  imports: [TableModule],
  templateUrl: './section-historico-imc.component.html',
  styleUrl: './section-historico-imc.component.scss'
})
export class SectionHistoricoImcComponent {
  products!: any
}
