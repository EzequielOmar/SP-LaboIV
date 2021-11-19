import { Component, OnInit } from '@angular/core';
import { User, UserId } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: Array<UserId> = [];
  selected?: UserId;
  filter: number = 0;

  constructor(private userDb: UserService) {
    this.getSpecialist();
  }

  ngOnInit(): void {}

  selectUser(user: any) {
    this.selected = user;
  }

  private getSpecialist() {
    this.userDb.getUsers().onSnapshot((snap) => {
      this.users = [];
      snap.forEach((child: any) => {
        this.users.push({
          id: child.id,
          data: child.data() as User,
        });
      });
    });
  }
}
