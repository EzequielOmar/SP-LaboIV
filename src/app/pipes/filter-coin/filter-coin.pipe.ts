import { Pipe, PipeTransform } from '@angular/core';
import { CoinId } from 'src/app/interfaces/coin';

@Pipe({
  name: 'filterCoin',
})
export class FilterCoinPipe implements PipeTransform {
  transform(value: CoinId[], de: number, a: number): CoinId[] {
    if (de < 0 || a <= de) return value;
    if (value)
      return value.filter((c) => {
        return c.data.comision >= de && c.data.comision <= a;
      });
    return [];
  }
}
