import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICategory, IEvent } from '../history.interface';
import { HistoryService } from '../history.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit, OnDestroy {

  public isIncome!: boolean;
  public event!: IEvent;
  public show: boolean = false;
  private sub: Subscription = new Subscription();

  constructor(
    private historyService: HistoryService,
    private route: ActivatedRoute,
    ) { }

  public ngOnInit(): void {
    this.getEvent();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getEvent(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.sub.add(
      this.historyService.getEvent(id)
        .subscribe((data: IEvent[]) => {
          this.event = data[0];
          this.addCategoryName();
          this.isIncome = this.event.type === 'income';
          this.show = true;
        })
    );
  }

  private addCategoryName(): void {
    this.sub.add(
      this.historyService.getCategories()
        .subscribe((data: ICategory[]) => {
          const category: ICategory | undefined = data.find(item => item.id === this.event.category);
          category ? (this.event.category = category.name) : (this.event.category = 'not found');
        })
    );
  }

}
