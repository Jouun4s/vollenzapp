import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

    path: String = "/assets/imagens/balancap.png"


    hoverUser(el: HTMLElement){
        this.path =  '/assets/imagens/balancap.png'
        el.style.color = "#F5841C"  
       
    } 

    hoverMedidas(el: HTMLElement){
        this.path =  '/assets/imagens/balancal.png'
        el.style.color = "black"
    }
}
