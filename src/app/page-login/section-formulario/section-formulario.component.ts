import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-formulario.component.html',
  styleUrl: './section-formulario.component.scss'
})
export class SectionFormularioComponent {
  state: boolean = false

  deslegal(){
    this.state = false
  }

  legal(){
   this.state = true
  }

}
