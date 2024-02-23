import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-section-imc',
  standalone: true,
  imports: [SliderModule,FormsModule,DividerModule],
  templateUrl: './section-imc.component.html',
  styleUrl: './section-imc.component.scss'
})
export class SectionImcComponent {
  value!: 30;

}

