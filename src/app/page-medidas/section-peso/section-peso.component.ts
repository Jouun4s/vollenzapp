import { Component } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-section-peso',
  standalone: true,
  imports: [SliderModule,DividerModule],
  templateUrl: './section-peso.component.html',
  styleUrl: './section-peso.component.scss'
})
export class SectionPesoComponent {

}
