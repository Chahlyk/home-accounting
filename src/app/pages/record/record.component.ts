import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecordService } from './record.service';
import { Subscription } from 'rxjs';
import { ICategory } from '../history/history.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from './add-event/add-event.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit, OnDestroy {

  public dataSource: ICategory[] = [];
  public show: boolean = false;
  public update: boolean = false;

  private sub: Subscription = new Subscription();

  constructor(
    private recordService: RecordService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.getCategory();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onClick(update: boolean): void {
    this.update = update;
    if (this.update) {
      this.show = false;
      this.getCategory();
      this.show = true;
    }
  }

  public openDialogEvent(): void {
    this.dialog.open(AddEventComponent, {
      data: this.dataSource
    });
  }

  public openDialogCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      disableClose: true
    });
    this.sub.add(
      dialogRef.afterClosed()
        .subscribe((result: boolean) => {
          if (result) {
            this.getCategory();
          }
        })
    );
  }

  private getCategory(): void {
    this.sub.add(
      this.recordService.getCategories()
        .subscribe((data: ICategory[]) => {
          this.dataSource = data;
          this.show = true;
        })
    );
  }

}
