import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-section-dadospessoais',
  standalone: true,
  imports: [InputTextModule,FormsModule,InputMaskModule,InputNumberModule],
  templateUrl: './section-dadospessoais.component.html',
  styleUrl: './section-dadospessoais.component.scss'
})
export class SectionDadospessoaisComponent {
    value: any;
    value1: any;
}

