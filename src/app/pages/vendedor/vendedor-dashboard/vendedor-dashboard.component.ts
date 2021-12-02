import { Component, OnInit } from '@angular/core';
import { Coin, CoinId } from 'src/app/interfaces/coin';
import { UserId } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CoinsService } from 'src/app/services/coins/coins.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-vendedor-dashboard',
  templateUrl: './vendedor-dashboard.component.html',
  styleUrls: ['./vendedor-dashboard.component.scss'],
})
export class VendedorDashboardComponent implements OnInit {
  //navbar
  dropMenu: boolean = false;
  active: number = -1;
  //coin list
  show: boolean = false;
  de: number = 0;
  a: number = 0;
  coins!: CoinId[];
  coinsOffered!: CoinId[];
  selectedCoin!: CoinId;
  //user
  seller!: UserId;

  constructor(
    private auth: AuthService,
    private cs: CoinsService,
    private us: UserService
  ) {
    this.coinsOffered = [];
    this.us.getUser(auth.currentUser?.uid ?? '').then((u) => {
      this.seller = u;
      if (this.seller.data.coins.length) this.getUserCoins();
    });
  }

  ngOnInit(): void {
    this.getCoins();
  }

  setActive(selected: number) {
    this.active = selected;
  }

  signOut() {
    this.auth.signOut();
  }

  selectCoin(coin: any) {
    this.show = true;
    this.selectedCoin = coin;
    if (
      !this.coinsOffered.filter((c) => c.data.nombre === coin.data.nombre)
        .length
    )
      this.coinsOffered.push(coin);
  }

  saveChanges() {
    this.coinsOffered.forEach((c) => {
      this.seller.data.coins.push(c.id);
    });
    this.us.writeUser(this.seller.id, this.seller.data);
    this.show = false;
  }

  private getCoins() {
    this.cs.getCoins().onSnapshot((snap) => {
      this.coins = [];
      snap.forEach((child: any) => {
        this.coins.push({
          id: child.id,
          data: child.data() as Coin,
        } as CoinId);
      });
    });
  }

  private getUserCoins() {
    this.cs
      .getUserCoins(this.seller.data.coins)
      .get()
      .then((snap) => {
        snap.forEach((child: any) => {
          this.coinsOffered.push({
            id: child.id,
            data: child.data() as Coin,
          } as CoinId);
        });
      });
  }
}
