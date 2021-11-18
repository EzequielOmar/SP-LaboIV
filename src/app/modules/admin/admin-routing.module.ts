import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/pages/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
   /*
    children: [
      {
        path: '',
        component: SpecialistPanelComponent,
        outlet: 'adminMenu',
      },
      {
        path: 'user',
        component: UserPanelComponent,
        outlet: 'adminMenu',
      },
      {
        path: 'admin',
        component: AdminPanelComponent,
        outlet: 'adminMenu',
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
