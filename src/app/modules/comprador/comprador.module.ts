import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorDashboardComponent } from 'src/app/pages/comprador/comprador-dashboard/comprador-dashboard.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { CompradorRoutingModule } from './comprador-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerPicNameDirective } from 'src/app/directives/seller-pic-name.directive';

@NgModule({
  declarations: [CompradorDashboardComponent, SellerPicNameDirective],
  imports: [
    CommonModule,
    CompradorRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class CompradorModule {}
