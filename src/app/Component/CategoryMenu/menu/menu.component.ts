import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public onMouseoverStyle = {};

  // tslint:disable-next-line:max-line-length
  items = ['First', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Second', 'Third'];
  constructor() { }

  ngOnInit() {
  }


  onMouseover() {
    this.onMouseoverStyle = {
      height: '80%',
      width: '300px',
      'font-size' : '30px '
    };
  }

  onMouseLeaver() {
    this.onMouseoverStyle = {
      height: '500px',
      'font-size' : '25px '
    };
  }
}
