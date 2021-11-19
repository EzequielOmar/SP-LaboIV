export interface Coin {
  nombre: string;
  costoActual: string;
  comision: number;
  año: number;
}

export type CoinId = { id: string; data: Coin };
