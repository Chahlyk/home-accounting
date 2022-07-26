import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
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
  public change: boolean = false;
  public displayedColumns: string[] = ['index', 'name', 'capacity', 'action'];

  private sub: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    public recordService: RecordService
  ) { }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public refreshTable(): void {
    this.change = !this.change;
    this.recordService.sendUpdate(this.change);
    this.change = !this.change;
  }

  public openDialogEdit(element: ICategory): void {
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      data: {
        dataSource: this.dataSource,
        category: element
      },
      disableClose: true
    });
    this.sub.add(
      dialogRef.afterClosed()
        .subscribe((result: boolean) => {
          if (result) {
            this.refreshTable();
          }
        })
    );
  }

}
