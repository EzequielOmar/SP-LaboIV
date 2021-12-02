import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserId } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss'],
})
export class UserListTableComponent {
  @Input() users!: Array<any>;
  @Output() userSelected: EventEmitter<UserId> = new EventEmitter<UserId>();
  selected?: UserId;

  constructor() {}

  selectUser(user: any) {
    this.selected = user;
    this.userSelected?.emit(user);
  }
}
