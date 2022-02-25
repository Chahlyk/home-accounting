import {Component, Input, ViewChild} from '@angular/core';
import {IEvents} from '../history.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() public dataSource: IEvents[] = [];

  public displayedColumns: string[] = ['#', 'sum', 'date', 'category', 'type', 'action'];


}
