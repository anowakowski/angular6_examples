import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  content: Observable<any>;

  hidenConent = true;
  // content = 'text with warn';
  severity = 3;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.content = this.messageService.getContent();
  }

  toggle() {
    this.hidenConent = !this.hidenConent;
  }

}
