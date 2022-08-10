import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICategory } from '../../history/history.interface';
import { RecordService } from '../record.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {

  private sub: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICategory,
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    private recordService: RecordService
  ) { }

  public deleteCategory(): void {
    if (this.data.id) {
      this.sub.add(
        this.recordService.deleteCategory(this.data.id)
          .subscribe(() => {
            this.recordService.update.next();
            this.dialogRef.close(true);
          })
      );
    }
  }

}
