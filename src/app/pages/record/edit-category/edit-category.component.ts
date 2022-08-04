import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICategory, IEditModal } from '../../history/history.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  public form!: FormGroup;
  public dataSource: ICategory[] = this.data.dataSource;
  private sub: Subscription = new Subscription();
  private category: ICategory = this.data.category;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IEditModal,
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    private recordService: RecordService
  ) { }

  public ngOnInit(): void {
    this.buildForm();
    this.changeFormDefault();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public editCategory(): void {
    const category: ICategory = this.form.value;
    this.sub.add(
      this.recordService.editCategory(category)
        .subscribe(() => {
          this.dialogRef.close(true);
        })
    );
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      id: new FormControl(this.category.id, Validators.required),
      name: new FormControl(this.category.name, Validators.required),
      capacity: new FormControl(this.category.capacity, [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
    });
  }

  private changeFormDefault(): void {
    this.sub.add(
      this.form.get('id')?.valueChanges.subscribe((id: number) => {
        const category = this.dataSource.find((item: ICategory) => item.id === id);
        if (category) {
          this.form.patchValue(category);
        }
      })
    );
  }

}
