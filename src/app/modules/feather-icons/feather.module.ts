import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Star,
  Users,
  Calendar,
  Plus,
  UserCheck,
  UserPlus,
  CheckCircle,
  Lock,
  Unlock,
  Crosshair,
  PlusCircle,
  Image,
  Trash2,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Star,
  Trash2,
  Users,
  Calendar,
  Plus,
  UserCheck,
  CheckCircle,
  Lock,
  Unlock,
  Crosshair,
  UserPlus,
  PlusCircle,
  Image,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
