import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecordService } from '../record.service';
import { ICategories } from '../../history/history.interface';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnDestroy {

  @Input() public dataSource: ICategories[] = [];
  @Input() public showDelete: boolean = true;
  @Input()  public id!: number;
  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();

  private sub: Subscription = new Subscription();

  constructor(private recordService: RecordService) { }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public delete(): void {
    this.sub.add(
      this.recordService.deleteCategory(this.id)
        .subscribe()
    );
    this.close();
  }

  public close(): void {
    this.showDelete = !this.showDelete;
    this.clickChange.emit(this.showDelete);
  }

}
