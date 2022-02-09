export interface IBill {
  value: number;
  currency: string;
}

export interface ICurrency {
  base: string;
  date: string;
  rates: IRates;
  success: boolean;
  timestamp: number;
}

export interface IRates {
  UAH: number;
  EUR: number;
  USD: number;
  BYN: number;
}

export interface IRate {
  currency: string;
  rate: any;
  date: any;
}
