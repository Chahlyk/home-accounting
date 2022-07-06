import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecordService } from './record.service';
import { Subscription } from 'rxjs';
import { ICategory } from '../history/history.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from './add-event/add-event.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit, OnDestroy {

  public dataSource: ICategory[] = [];
  public show: boolean = false;

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

  public openDialog(): void {
    this.dialog.open(AddEventComponent, {
      data: this.dataSource
    });
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
