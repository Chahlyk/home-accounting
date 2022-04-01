import { Component, Input } from '@angular/core';
import { ICategories } from '../../history/history.interface';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {

  @Input() public dataSource: ICategories[] = [];

  public displayedColumns: string[] = ['id', 'name', 'capacity', 'action'];
  public showDelete!: boolean;
  public showEdit!: boolean;
  public id!: number;

  public onClick(show: boolean): void {
    this.showDelete = show;
    this.showEdit = show;
  }

  public getId(id: number): void {
    this.id = id;
  }

}
