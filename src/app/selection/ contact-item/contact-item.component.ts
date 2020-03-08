import { Component, Input } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-contact-item' ,
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() phoneNumber: string;

  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  deleteContact() {
    this.notificationService.warning('this feature will available later');
  }
}
