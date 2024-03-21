import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { Subscription } from 'rxjs';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-section-pessoais',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section-pessoais.component.html',
  styleUrl: './section-pessoais.component.scss'
})
export class SectionPessoaisComponent implements OnInit,OnDestroy {

  constructor(private backend: BackendService){}
  subscription: Subscription[] = []

  data = new Array<any>()

  myItem:any

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe())
  }



  ngOnInit(): void {
    this.myItem = localStorage.getItem('cpf')
    console.log(this.myItem)
    this.getInfo()
    // this.verifyEl()
  }

  verifyEl(){
    this.data.reduce((_, atual: Paciente) => {
      console.log(atual.cpf, 'atual')
      if(atual.cpf == this.myItem){
        console.log('achei')
      }
    }, 0)
  }


  getInfo(){
    let sub = this.backend.getInfo().subscribe({
      next: (res) => {
        this.data = res
        console.log(res)
      }
    })
    this.subscription.push(sub)
  }
}
