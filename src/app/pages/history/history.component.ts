import { Component, OnDestroy, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { Subscription } from 'rxjs';
import { ICategory, IChart, IEvent } from './history.interface';
import { MatTableDataSource } from '@angular/material/table';
import { AddEventComponent } from '../record/add-event/add-event.component';
import { MatDialog } from '@angular/material/dialog';

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
  private outcomeEvents: IChart[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private historyService: HistoryService,
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
    this.sub.add(
      this.historyService.getCategories()
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
    return category !== undefined ? category.name : 'not found';
  }

  private getDataChart(): void {
    this.outcomeEvents = [];
    for (const item of this.dataTable) {
      if (item.type === 'outcome') {
        this.outcomeEvents.push({name: item.category, y: +item.amount});
      }
    }
    const sumAmount = Object.fromEntries(this.outcomeEvents.map(val => [val.name, 0]));
    this.outcomeEvents.forEach(val => { sumAmount[val.name] += val.y; } );
    const separated  = Object.entries(sumAmount);
    separated.map(item => this.dataChart.push({name: item[0], y: item[1]}));
    this.show = true;
  }

}
