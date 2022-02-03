import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();

  public showState: boolean = true;

  constructor(private router: Router) {
  }

  public show(): void {
    this.showState = !this.showState;
    this.clickChange.emit(this.showState);
  }

  public exit(): void {
    localStorage.removeItem('User');
    this.router.navigate(['/auth/sign-in']);
  }

}
