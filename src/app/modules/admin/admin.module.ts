import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//router
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from 'src/app/pages/admin/admin-dashboard/admin-dashboard.component';
import { SpecialistPanelComponent } from 'src/app/pages/admin/specialist-panel/specialist-panel.component';
import { UserPanelComponent } from 'src/app/pages/admin/user-panel/user-panel.component';
import { IconsModule } from '../feather-icons/feather.module';
import { ListaUsuariosComponent } from 'src/app/components/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from 'src/app/components/detalle-usuario/detalle-usuario.component';
//modules

@NgModule({
  declarations: [
    AdminDashboardComponent,
    SpecialistPanelComponent,
    UserPanelComponent,
    ListaUsuariosComponent,
    DetalleUsuarioComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, IconsModule],
})
export class AdminModule {}
