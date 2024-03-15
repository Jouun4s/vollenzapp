import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from '../../services/backend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-dados',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './section-dados.component.html',
  styleUrl: './section-dados.component.scss'
})
export class SectionDadosComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = []
  data = new Array<any>()

  constructor(private backend: BackendService){}

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
