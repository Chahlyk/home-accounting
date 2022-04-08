import { Component, Input } from '@angular/core';
import { ICategories } from '../../history/history.interface';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {

  @Input() public dataSource: ICategories[] = [];

  public displayedColumns: string[] = ['index', 'name', 'capacity', 'action'];

}
