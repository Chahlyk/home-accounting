export interface  IEvents {
  id: number;
  type: string;
  amount: number;
  category: number;
  date: string;
  description: string;
}

export interface ICategories {
  capacity: number;
  name: string;
  id: number;
}
