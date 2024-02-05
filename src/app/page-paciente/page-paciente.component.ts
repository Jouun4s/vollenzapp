import { Component } from '@angular/core';
import { SectionUserComponent } from './section-user/section-user.component';
import { SectionDadosComponent } from './section-dados/section-dados.component';
import { SectionPessoaisComponent } from './section-pessoais/section-pessoais.component';

@Component({
  selector: 'app-page-paciente',
  standalone: true,
  imports: [SectionUserComponent, SectionDadosComponent, SectionPessoaisComponent],
  templateUrl: './page-paciente.component.html',
  styleUrl: './page-paciente.component.scss'
})
export class PagePacienteComponent {

}
