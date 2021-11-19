import { Pipe, PipeTransform } from '@angular/core';
import { UserId, UserProfiles } from 'src/app/interfaces/user';

@Pipe({
  name: 'filterUser',
})
export class FilterUserPipe implements PipeTransform {
  transform(value: Array<UserId>, tipo: number): Array<UserId> | [] {
    if (!tipo) return value;
    if (value)
      return value.filter((u) => {
        return u.data.tipo === tipo;
      });
    return [];
  }
}
