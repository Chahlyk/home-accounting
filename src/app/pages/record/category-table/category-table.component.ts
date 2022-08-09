import { Component, Input, OnDestroy } from '@angular/core';
import { ICategory } from '../../history/history.interface';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnDestroy {

  @Input() public dataSource: ICategory[] = [];
  public displayedColumns: string[] = ['index', 'name', 'capacity', 'action'];

  private sub: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    public recordService: RecordService
  ) { }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public openDialogEdit(element: ICategory): void {
    this.dialog.open(EditCategoryComponent, {
      data: {
        dataSource: this.dataSource,
        category: element
      },
      disableClose: true
    });
  }

}
