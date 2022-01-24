import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { IUser } from "../auth.interface";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

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

  public signUp(): void {
    const user = {...this.form.value}
    delete user.check;
    this.sub.add(
      this.authService.getUser(user.email)
        .subscribe((data: Array<IUser>) => {
            if (data.length !== 0) {
              this.errorMessage('User with this mail is already registered');
            } else {
              this.authService.createUser(user)
                .subscribe(() => {
                    this.router.navigate(['/sign-in'])
                }
                );
            }
        })
    );
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
      name: new FormControl('', Validators.required),
      check: new FormControl(false, Validators.requiredTrue)
    })
  }

}
