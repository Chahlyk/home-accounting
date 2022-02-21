export interface IBill {
  value: number;
  currency: string;
}

export interface ICurrency {
  base?: string;
  date: string;
  rates: IRates[];
  success?: boolean;
  timestamp?: number;
}

export interface IRates {
  currency: string;
  rate: number;
}
