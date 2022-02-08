import { Component, EventEmitter, Output } from '@angular/core';
import {AuthService} from '../../../pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();

  public showState: boolean = true;

  constructor(private authService: AuthService) {
  }

  public show(): void {
    this.showState = !this.showState;
    this.clickChange.emit(this.showState);
  }

  public signOut(): void {
    this.authService.signOut();
  }

}
