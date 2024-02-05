import { Component } from '@angular/core';
import { SectionTituloComponent } from './section-titulo/section-titulo.component';
import { SectionFormularioComponent } from './section-formulario/section-formulario.component';
import { SectionSubmitComponent } from './section-submit/section-submit.component';


@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [SectionTituloComponent, SectionFormularioComponent, SectionSubmitComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {

}
