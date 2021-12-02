export interface Coin {
  nombre: string;
  costoActual: string;
  comision: number;
  anio: number;
}

export type CoinId = { id: string; data: Coin };
