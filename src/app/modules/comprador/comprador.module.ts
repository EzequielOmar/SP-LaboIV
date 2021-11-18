import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorDashboardComponent } from 'src/app/pages/comprador/comprador-dashboard/comprador-dashboard.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { CompradorRoutingModule } from './comprador-routing.module';

@NgModule({
  declarations: [CompradorDashboardComponent],
  imports: [CommonModule, CompradorRoutingModule, SharedComponentsModule],
})
export class CompradorModule {}
