import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPersonaComponent } from 'src/app/components/form-person/form-person.component';
import { IconsModule } from '../feather-icons/feather.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UserListTableComponent } from '../../components/user-list-table/user-list-table.component';
import { UserDetailComponent } from '../../components/user-detail/user-detail/user-detail.component';

@NgModule({
  declarations: [
    FormPersonaComponent,
    UserListTableComponent,
    UserDetailComponent,
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
  ],
})
export class SharedComponentsModule {}
