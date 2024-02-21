import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-section-submit',
  standalone: true,
  imports: [ButtonModule,RouterModule],
  templateUrl: './section-submit.component.html',
  styleUrl: './section-submit.component.scss'
})
export class SectionSubmitComponent {

}
