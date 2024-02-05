import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-section-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule,  InputMaskModule],
  templateUrl: './section-formulario.component.html',
  styleUrl: './section-formulario.component.scss'
})
export class SectionFormularioComponent {
  state: boolean = false
  value1: string | undefined;

  deslegal(){
    this.state = false
  }

  legal(){
   this.state = true
  }

}
