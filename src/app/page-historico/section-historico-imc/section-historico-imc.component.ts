import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-section-historico-imc',
  standalone: true,
  imports: [TableModule,CardModule,DividerModule, RouterModule],
  templateUrl: './section-historico-imc.component.html',
  styleUrl: './section-historico-imc.component.scss'
})
export class SectionHistoricoImcComponent {
  products!: any
}
