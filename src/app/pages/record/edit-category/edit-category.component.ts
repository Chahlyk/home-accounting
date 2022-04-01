import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICategories } from '../../history/history.interface';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  @Input()  public id!: number;
  @Input() public categories: ICategories[] = [];
  @Input() public showEdit: boolean = true;
  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();

  public form!: FormGroup;

  private sub: Subscription = new Subscription();

  constructor(private recordService: RecordService) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public close(): void {
    this.showEdit = !this.showEdit;
    this.clickChange.emit(this.showEdit);
  }

  public editCategory(): void {
    const category: ICategories = {...this.form.value};
    this.sub.add(
      this.recordService.editCategory(category.id, category)
        .subscribe()
    );
    this.close();
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      id: new FormControl(this.categories[this.id - 1].id, Validators.required),
      name: new FormControl(this.categories[this.id - 1].name, Validators.required),
      capacity: new FormControl(this.categories[this.id - 1].capacity, [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)])
    });
  }

}
