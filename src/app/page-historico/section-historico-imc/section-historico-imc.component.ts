import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-section-historico-imc',
  standalone: true,
  imports: [TableModule,CardModule,DividerModule],
  templateUrl: './section-historico-imc.component.html',
  styleUrl: './section-historico-imc.component.scss'
})
export class SectionHistoricoImcComponent {
  products!: any
}
