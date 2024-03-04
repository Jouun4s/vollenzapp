import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-section-dadospessoais',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './section-dadospessoais.component.html',
  styleUrl: './section-dadospessoais.component.scss'
})
export class SectionDadospessoaisComponent {

}

export class InputTextHelpTextDemo {
  value: string | undefined;
}
