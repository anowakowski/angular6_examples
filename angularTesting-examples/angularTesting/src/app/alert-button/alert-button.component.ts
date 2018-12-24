import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {
  hidenConent = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hidenConent = !this.hidenConent;
  }

}
