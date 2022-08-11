import { Component, Input } from '@angular/core';
import { ICategory } from '../../history/history.interface';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { RecordService } from '../record.service';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {

  @Input() public dataSource: ICategory[] = [];
  public displayedColumns: string[] = ['index', 'name', 'capacity', 'action'];

  constructor(
    public dialog: MatDialog,
    public recordService: RecordService
  ) { }

  public openDialogEdit(element: ICategory): void {
    this.dialog.open(EditCategoryComponent, {
      data: {
        dataSource: this.dataSource,
        category: element
      },
      disableClose: true
    });
  }

  public openDialogDelete(element: ICategory): void {
    this.dialog.open(DeleteCategoryComponent, {
      data: element,
      disableClose: true
    });
  }

}
