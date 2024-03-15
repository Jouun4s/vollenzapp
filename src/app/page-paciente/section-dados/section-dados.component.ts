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
export class SectionDadosComponent  {
  
}
