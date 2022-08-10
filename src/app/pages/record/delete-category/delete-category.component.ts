import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICategory } from '../../history/history.interface';
import { RecordService } from '../record.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnDestroy {

  private sub: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICategory,
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    private recordService: RecordService
  ) { }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public deleteCategory(id: number): void {
      this.sub.add(
        this.recordService.deleteCategory(id)
          .subscribe(() => {
            this.recordService.update.next();
            this.dialogRef.close(true);
          })
      );
  }

}
