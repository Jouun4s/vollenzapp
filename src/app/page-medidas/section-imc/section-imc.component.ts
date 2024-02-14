import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-section-imc',
  standalone: true,
  imports: [SliderModule,FormsModule],
  templateUrl: './section-imc.component.html',
  styleUrl: './section-imc.component.scss'
})
export class SectionImcComponent {
  value!: number;

}

