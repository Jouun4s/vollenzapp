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
  data = new Array<any>()
  errMsg = ''
  value1: any

  cpf_comparison: any
  constructor(private backend: BackendService){}

  verify(cpf: any){
    this.data.filter((res) => {
      this.cpf_comparison = res.cpf
  })

  if(cpf === this.cpf_comparison){
    console.log('DEU BOM', cpf, this.cpf_comparison)
    this.errMsg = 'DEU BOM'

  } else {
    console.log('Deu ruim', cpf, this.cpf_comparison);
    this.errMsg = 'DEU RUIM'
  }
  }

  getData(){
   let sub = this.backend.getInfo().subscribe({
      next: (res: any) => {
       this.data = res
       console.log(this.data)
      }
    })
    this.subscription.push(sub)
  }

  ngOnInit(): void {
    this.getData()
  }
  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe())
  }

}
