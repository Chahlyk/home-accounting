export interface  IEvents {
  id?: number;
  type: string;
  amount: number;
  category: number | string;
  date: string;
  description?: string;
}

export interface ICategories {
  capacity: number;
  name: string;
  id: number;
}
