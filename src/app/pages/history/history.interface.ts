export interface  IEvent {
  id?: number;
  type: string;
  amount: number;
  category: number | string;
  date: string;
  description?: string;
}

export interface ICategory {
  capacity: number;
  name: string;
  id: number;
}

export interface IChart {
  name: string | number;
  y: number;
}

export interface IEditModal {
  dataSource: ICategory[];
  category: ICategory;
}
