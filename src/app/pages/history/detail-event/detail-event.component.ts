import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICategories, IEvents } from '../history.interface';
import { HistoryService } from '../history.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit, OnDestroy {

  public shadowInfo!: string;
  public colourType!: string;
  public show: boolean = false;
  public event!: IEvents;
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
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.sub.add(
      this.historyService.getEventById(id)
        .subscribe((data: IEvents[]) => {
          data.forEach(item => this.event = {...item, category: this.getCategory(item)});
          this.shadowInfo = this.event.type === 'income' ? 'blueShadow' : 'redShadow';
          this.colourType = this.event.type === 'income' ? 'blueText' : 'redText';
          this.show = true;
        })
    );
  }

  private getCategory(event: IEvents): string {
    let category: ICategories | undefined;
    let name!: string;
    this.historyService.getCategories()
      .subscribe((data: ICategories[]) => {
        category = data.find(item => item.id === event.category);
        if (category !== undefined) {
          name = category.name;
        } else {
          name = 'not found';
        }
      });
    return name;

  }

}
