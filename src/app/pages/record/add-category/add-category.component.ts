import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RecordService } from '../record.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  public form!: FormGroup;
  private sub: Subscription = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private recordService: RecordService ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public addCategories(): void {
    this.sub.add(
      this.recordService.addCategory(this.form.value)
        .subscribe(() => {
          this.dialogRef.close(true);
        })
    );
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      name: new FormControl('', Validators.required),
      capacity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
    });
  }

}
