import { Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePacienteComponent } from './page-paciente/page-paciente.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { PageMedidasComponent } from './page-medidas/page-medidas.component';
import { PageHistoricoComponent } from './page-historico/page-historico.component';
import { PageCadastroComponent } from './page-cadastro/page-cadastro.component';

export const routes: Routes = [
    {
      path: "",
      redirectTo: "/login",
      pathMatch: 'full'  
    },
  {
    path:"login",
    component: PageLoginComponent,
  },
  {
    path:"cadastro",
    component: PageCadastroComponent
  },
    {
      path:"",
      component:LayoutComponent,
      children:[
        {
          path:"paciente",
          component: PagePacienteComponent
        },
        {
          path:"medidas",
          component: PageMedidasComponent

        },
        {
          path:"historico",
          component: PageHistoricoComponent
        }
      ]

    }
];
