import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//router
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from 'src/app/pages/admin/admin-dashboard/admin-dashboard.component';
import { IconsModule } from '../feather-icons/feather.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCryptoComponent } from '../../pages/admin/create-crypto/create-crypto.component';
import { SellerPanelComponent } from '../../pages/admin/seller-panel/seller-panel.component';
import { UserListComponent } from '../../pages/admin/user-list/user-list.component';
//modules

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CreateCryptoComponent,
    SellerPanelComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IconsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
