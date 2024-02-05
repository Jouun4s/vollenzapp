import { Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePacienteComponent } from './page-paciente/page-paciente.component';

export const routes: Routes = [
    {
      path: "",
      redirectTo: "/login",
      pathMatch: 'full'  
    },
    {
        path: "login",
        component: PageLoginComponent

    },
    {
      path:"usuario",
      component: PagePacienteComponent
    }
];
