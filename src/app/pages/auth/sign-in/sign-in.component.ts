import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public hide: boolean = true;
  public form!: FormGroup;

  public constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.buildForm();
    this.getData();
  }

  private getData(): any {
    this.http.get('http://localhost:3000/categories')
      .subscribe((data:any) => {
        console.log(data);
      })
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6) ,Validators.required]),
    })
  }

}
