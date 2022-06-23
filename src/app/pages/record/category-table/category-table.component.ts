import { Component, Input } from '@angular/core';
import { ICategory } from '../../history/history.interface';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {

  @Input() public dataSource: ICategory[] = [];

  public displayedColumns: string[] = ['index', 'name', 'capacity', 'action'];

}
