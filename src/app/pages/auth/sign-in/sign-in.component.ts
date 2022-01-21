import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { IUser } from "../../../shared/interfaces";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  public hide: boolean = true;
  public form!: FormGroup;
  public errorText: string = '';

  private sub: Subscription = new Subscription();

  public constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public signIn(): void {
    const user = {...this.form.value}
    this.sub.add(
      this.authService.getUser(user.email)
        .subscribe((data: IUser[]) => {
          if (data.length === 0) {
            this.errorMessage( 'This user does not exist');
          } else {
            if (user.password === data[0].password) {
              this.router.navigate(['/bill']);
              localStorage.setItem('User', JSON.stringify(data[0]));
            } else {
              this.errorMessage('Password is not correct');
            }}
        })
    )
  }

  private errorMessage(text: string): void {
    this.errorText = text;
    setTimeout(() => {
      this.errorText = '';
    }, 5000)
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6) ,Validators.required]),
    })
  }

}
