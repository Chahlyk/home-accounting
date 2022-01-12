export interface IUser {
  id?: number,
  email: string,
  password: string,
  name?: string,
}

export interface IBill {
  value: number,
  currency: string,
}

export interface ICurrency {
  base: string,
  date: string,
  rates: {
    UAH: number,
    EUR: number,
    USD: number,
    BYN: number,
  },
  success: boolean,
  timestamp: number,
}

export interface ICategories {
  capacity: number,
  name: string,
  id: number,
}

export interface IEvents {
  id: number,
  type: string,
  amount: number,
  category: number,
  date: string,
  description: string,
}
