import { Component, OnInit } from '@angular/core';
import { User, UserId, UserProfiles } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-seller-panel',
  templateUrl: './seller-panel.component.html',
  styleUrls: ['./seller-panel.component.scss'],
})
export class SellerPanelComponent implements OnInit {
  users: Array<UserId> = [];
  selected?: UserId;
  tipo: number = UserProfiles.vendedor;
  constructor(private userDb: UserService) {
    this.getSpecialist();
  }

  ngOnInit(): void {}

  selectUser(user: any) {
    console.log(user);
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
