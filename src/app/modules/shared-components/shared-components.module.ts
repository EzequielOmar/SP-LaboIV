import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPersonaComponent } from 'src/app/components/form-person/form-person.component';
import { IconsModule } from '../feather-icons/feather.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FormPersonaComponent,
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
  ],
})
export class SharedComponentsModule {}
