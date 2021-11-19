import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/pages/admin/admin-dashboard/admin-dashboard.component';
import { CreateCryptoComponent } from 'src/app/pages/admin/create-crypto/create-crypto.component';
import { SellerPanelComponent } from 'src/app/pages/admin/seller-panel/seller-panel.component';
import { UserListComponent } from 'src/app/pages/admin/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: CreateCryptoComponent,
        outlet: 'adminMenu',
      },
      {
        path: 'vendedores',
        component: SellerPanelComponent,
        outlet: 'adminMenu',
      },
      {
        path: 'usuarios',
        component: UserListComponent,
        outlet: 'adminMenu',
      },
    ],
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
export class AdminRoutingModule {}

/*

  path: 'lobby',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: '',
        component: LobbyComponent,
        outlet: 'menuList',
      },
      {
        path: 'about',
        component: AboutMeComponent,
        outlet: 'menuList',
      },

      {
        path: 'home',
        redirectTo: 'lobby',
        pathMatch: 'full',*/
