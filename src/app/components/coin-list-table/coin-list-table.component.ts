import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoinId } from 'src/app/interfaces/coin';

@Component({
  selector: 'app-coin-list-table',
  templateUrl: './coin-list-table.component.html',
  styleUrls: ['./coin-list-table.component.scss'],
})
export class CoinListTableComponent {
  coinSelectedData?: CoinId;
  @Input() coins!: Array<any>;
  @Output() coinSelected: EventEmitter<CoinId> = new EventEmitter<CoinId>();

  constructor() {}

  selectCoin(coin: CoinId) {
    this.coinSelectedData = coin;
    this.coinSelected?.emit(coin);
  }
}
