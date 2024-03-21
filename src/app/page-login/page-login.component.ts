import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() resendCpf = new EventEmitter<any>()

  resend_cpf: any


  method(cpf: any){
    
    this.resend_cpf = cpf
    this.resendCpf.emit(this.resend_cpf)
    console.log(this.resend_cpf, 'my cpf')
   }

}
