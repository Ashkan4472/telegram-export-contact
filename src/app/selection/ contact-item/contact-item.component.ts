import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-item' ,
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() phoneNumber: string;
  @Input() index: number;
  @Output() deleteEvent = new EventEmitter();

  constructor() {}

  onDeleteEvent() {
    this.deleteEvent.emit(this.index);
  }
}
