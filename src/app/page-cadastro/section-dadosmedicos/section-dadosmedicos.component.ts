import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';




@Component({
  selector: 'app-section-dadosmedicos',
  standalone: true,
  imports: [FormsModule,InputMaskModule,InputTextModule,InputNumberModule],
  templateUrl: './section-dadosmedicos.component.html',
  styleUrl: './section-dadosmedicos.component.scss'
})
export class SectionDadosmedicosComponent {
  value: any;
  value1: any;
  value2: any;
  value3: any;
}
