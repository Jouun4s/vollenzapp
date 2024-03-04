import { Component } from '@angular/core';
import { SectionDadosmedicosComponent } from './section-dadosmedicos/section-dadosmedicos.component';
import { SectionDadospessoaisComponent } from './section-dadospessoais/section-dadospessoais.component';
import { SectionSubmitComponent } from './section-submit/section-submit.component';
import { SectionUsuarioComponent } from './section-usuario/section-usuario.component';

@Component({
  selector: 'app-page-cadastro',
  standalone: true,
  imports: [SectionDadosmedicosComponent,SectionDadospessoaisComponent,SectionSubmitComponent,SectionUsuarioComponent],
  templateUrl: './page-cadastro.component.html',
  styleUrl: './page-cadastro.component.scss'
})
export class PageCadastroComponent {

}
