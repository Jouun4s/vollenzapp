import { Component } from '@angular/core';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-section-imc',
  standalone: true,
  imports: [SliderModule],
  templateUrl: './section-imc.component.html',
  styleUrl: './section-imc.component.scss'
})
export class SectionImcComponent {

}
