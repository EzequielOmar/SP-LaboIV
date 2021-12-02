import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { FilterCoinPipe } from 'src/app/pipes/filter-coin/filter-coin.pipe';
import { VendedorDashboardComponent } from 'src/app/pages/vendedor/vendedor-dashboard/vendedor-dashboard.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [FilterCoinPipe, VendedorDashboardComponent],
  imports: [CommonModule, VendedorRoutingModule, SharedComponentsModule],
})
export class VendedorModule {}
