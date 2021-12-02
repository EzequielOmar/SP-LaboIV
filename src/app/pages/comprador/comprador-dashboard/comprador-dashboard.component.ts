import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coin, CoinId } from 'src/app/interfaces/coin';
import { User, UserId } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CoinsService } from 'src/app/services/coins/coins.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-comprador-dashboard',
  templateUrl: './comprador-dashboard.component.html',
  styleUrls: ['./comprador-dashboard.component.scss'],
})
export class CompradorDashboardComponent implements OnInit {
  //menu
  dropMenu: boolean = false;
  active: number = -1;
  //usuario logueado
  user?: any;
  //vendedores
  sellers: Array<UserId> = [];
  selected?: UserId;
  coinsOffered!: CoinId[];
  selectedCoin?: CoinId;
  buy!: FormGroup;
  sended: boolean = false;

  constructor(
    private auth: AuthService,
    private userDb: UserService,
    private cs: CoinsService,
    private fb: FormBuilder
  ) {
    this.user = this.auth.currentUser;
    this.getSellers();
  }

  ngOnInit(): void {}

  setActive(selected: number) {
    this.active = selected;
  }

  signOut() {
    this.auth.signOut();
  }

  selectUser(user: any) {
    this.selected = user;
    this.getUserCoins();
  }

  selectCoin(coin: CoinId) {
    this.selectedCoin = coin;
    this.buy = this.fb.group({
      ammount: [
        0,
        [Validators.required, Validators.min(0.1), Validators.max(99)],
      ],
    });
  }

  comprar() {
    this.sended = true;
    if (this.buy.valid) {
    
    }
  }

  private getSellers() {
    this.userDb.getUsers().onSnapshot((snap: any) => {
      this.sellers = [];
      snap.forEach((child: any) => {
        let u: UserId = {
          id: child.id,
          data: child.data() as User,
        } as UserId;
        if (u.data.verificado) this.sellers.push(u);
      });
    });
  }

  private getUserCoins() {
    if (this.selected)
      this.cs
        .getUserCoins(this.selected.data.coins)
        .get()
        .then((snap) => {
          this.coinsOffered = [];
          snap.forEach((child: any) => {
            this.coinsOffered.push({
              id: child.id,
              data: child.data() as Coin,
            } as CoinId);
          });
        });
  }
}
