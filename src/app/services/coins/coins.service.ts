import { Injectable } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin';
import { dbNames } from 'src/app/interfaces/dbNames';
import { DbService } from '../db/db.service';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private db: DbService) {}

  writeCoin = async (coin: Coin) => {
    await this.db.set(dbNames.coins, coin);
  };
}
