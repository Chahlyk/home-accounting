import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();

  public showState: boolean = true;

  public show(): void {
    this.showState = !this.showState;
    this.clickChange.emit(this.showState);
  }

  public ngOnInit(): void {
  }

}
