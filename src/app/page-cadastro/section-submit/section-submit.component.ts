import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-section-submit',
  standalone: true,
  imports: [RouterModule,ButtonModule],
  templateUrl: './section-submit.component.html',
  styleUrl: './section-submit.component.scss'
})
export class SectionSubmitComponent {

}
