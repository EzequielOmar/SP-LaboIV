import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendedorDashboardComponent } from 'src/app/pages/vendedor/vendedor-dashboard/vendedor-dashboard.component';

const routes: Routes = [{ path: '', component: VendedorDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorRoutingModule {}
