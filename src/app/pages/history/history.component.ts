import { Component, OnDestroy, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { Subscription } from 'rxjs';
import { ICategory, IChart, IEvent } from './history.interface';
import { MatTableDataSource } from '@angular/material/table';
import { AddEventComponent } from '../record/add-event/add-event.component';
import { MatDialog } from '@angular/material/dialog';
import { RecordService } from '../record/record.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {

  public dataTable: IEvent[] = [];
  public dataSource!: MatTableDataSource<IEvent>;
  public dataChart: IChart[] = [];
  public show: boolean = false;
  private categories: ICategory[] = [];
  private dataEvents: IEvent[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private historyService: HistoryService,
    private recordService: RecordService,
    ) { }

  public ngOnInit(): void {
    this.getDataCategoryAndEvents();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      data: this.categories,
      disableClose: true
    });
    this.sub.add(
      dialogRef.afterClosed()
        .subscribe((result: boolean) => {
          if (result) {
            this.getDataCategoryAndEvents();
          }
        })
    );
  }

  private getDataCategoryAndEvents(): void {
    this.show = false;
    this.sub.add(
      this.recordService.getCategories()
        .subscribe((data: ICategory[]) => {
          this.categories = data;
          this.getEvents();
        })
    );
  }

  private getEvents(): void {
    this.dataTable = [];
    this.sub.add(
      this.historyService.getEvents()
        .subscribe((data: IEvent[]) => {
          this.dataEvents = data;
          data.forEach((val: IEvent) => {
            this.dataTable.push({...val, category: this.getCategory(val)});
            }
          );
          this.dataSource = new MatTableDataSource(this.dataTable);
          this.getDataChart();
        })
    );
  }

  private getCategory(event: IEvent): string {
    const category: ICategory | undefined = this.categories.find(item => item.id === event.category);
    return category ? category.name : 'not found';
  }

  private getDataChart(): void {
    this.dataChart = [];
    this.categories.forEach((cat: ICategory) => {
      const catEvent = this.dataEvents.filter((e: IEvent) => e.category === cat.id && e.type === 'outcome');
      this.dataChart.push({
        name: cat.name,
        y: catEvent.reduce((total, e) => {
          total += +e.amount;
          return total;
        }, 0)
      });
      this.show = true;
    });
  }

}
