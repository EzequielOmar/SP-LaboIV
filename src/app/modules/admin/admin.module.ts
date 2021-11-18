import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//router
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from 'src/app/pages/admin/admin-dashboard/admin-dashboard.component';
import { IconsModule } from '../feather-icons/feather.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
//modules

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IconsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
