import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { Subscription } from 'rxjs';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-section-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule,  InputMaskModule],
  templateUrl: './section-formulario.component.html',
  styleUrl: './section-formulario.component.scss'
})
export class SectionFormularioComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = []

  login = new Array<any>()

  constructor(private backend: BackendService){}

  getLogin(){
    let sub = this.backend.login().subscribe({
      next: (res: any) => {
        this.login = res
        console.log(this.login)
      }
    })
    this.subscription.push(sub)
  }

  ngOnInit(): void {
    this.getLogin()
  }
  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe())
  }
  state: boolean = false
  value1: string | undefined;

  deslegal(){
    this.state = false
  }

  legal(){
   this.state = true
  }

}
