import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-section-historico',
  standalone: true,
  imports: [ButtonModule,RouterModule],
  templateUrl: './section-historico.component.html',
  styleUrl: './section-historico.component.scss'
})
export class SectionHistoricoComponent {

}
