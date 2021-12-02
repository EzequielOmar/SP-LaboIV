import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPersonaComponent } from 'src/app/components/form-person/form-person.component';
import { IconsModule } from '../feather-icons/feather.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UserListTableComponent } from '../../components/user-list-table/user-list-table.component';
import { UserDetailComponent } from '../../components/user-detail/user-detail/user-detail.component';
import { CoinListTableComponent } from 'src/app/components/coin-list-table/coin-list-table.component';
import { FilterUserPipe } from 'src/app/pipes/filer-user/filter-user.pipe';

@NgModule({
  declarations: [
    FormPersonaComponent,
    UserListTableComponent,
    UserDetailComponent,
    CoinListTableComponent,
    FilterUserPipe,
  ],
  imports: [
    CommonModule,
    IconsModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    FormPersonaComponent,
    IconsModule,
    NgbModule,
    UserListTableComponent,
    UserDetailComponent,
    CoinListTableComponent,
    FilterUserPipe,
  ],
})
export class SharedComponentsModule {}
