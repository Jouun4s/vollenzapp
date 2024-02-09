import { Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePacienteComponent } from './page-paciente/page-paciente.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { PageMedidasComponent } from './page-medidas/page-medidas.component';

export const routes: Routes = [
    {
      path: "",
      redirectTo: "/login",
      pathMatch: 'full'  
    },
  {
    path:"login",
    component: PageLoginComponent
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

        }
      ]

    }
];
