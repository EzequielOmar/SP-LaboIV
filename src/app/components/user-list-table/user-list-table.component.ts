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

  constructor() {}

  selectUser(user: any) {
    this.userSelected?.emit(user);
  }
}
