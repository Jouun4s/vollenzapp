  import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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

    constructor(private backend: BackendService){
      this.verifyEl()
    }
    subscription: Subscription[] = []

    data = new Array<any>()

    paciente =  new Paciente()

    myItem:any

    ngOnDestroy(): void {
      this.subscription.forEach(sub => sub.unsubscribe())
    }
    
    ngOnInit(): void {
      this.getInfo()  
    }

    verifyEl(){
      this.myItem = JSON.parse(localStorage.getItem('cpf')!)

      this.paciente = this.data.reduce((_, atual: Paciente) => atual.cpf == this.myItem ? atual : undefined,0)
      console.log(this.paciente
        )
    }


    getInfo(){
      let sub = this.backend.getInfo().subscribe({
        next: (res) => {
          this.data = res
          console.log(this.paciente)
        }
      })
      this.subscription.push(sub)
    }
  }
