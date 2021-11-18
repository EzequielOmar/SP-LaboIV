import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompradorDashboardComponent } from 'src/app/pages/comprador/comprador-dashboard/comprador-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CompradorDashboardComponent,
    /*
    children: [
      {
        path: '',
        component: AppointmentsSpecialistComponent,
        outlet: 'specialistMenu',
      },
      {
        path: 'perfil',
        component: ProfileSpecialistComponent,
        outlet: 'specialistMenu',
      },
    ],
    */
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompradorRoutingModule {}
