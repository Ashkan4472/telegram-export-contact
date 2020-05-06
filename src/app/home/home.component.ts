import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { ContactModel } from '../models/contact.model';
import { Router } from '@angular/router';
import { ContactService } from '../core/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textVcf = '';

  constructor(
    private readonly notificationService: NotificationService,
    private readonly contactService: ContactService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  fileUpload(files: File[]) {
    if (files && files.length > 0) {
      const fileType = files[0].type;
      if (fileType.indexOf('json') === -1) {
        this.notificationService.primary('file should be in json format.');
      } else {
        const reader = new FileReader();
        reader.onloadend = (e) => {
          const contactJson = JSON.parse(reader.result as string);
          if (contactJson && contactJson.contacts && contactJson.contacts.list) {
            const contactsList = contactJson.contacts.list.map(c => ContactModel.contactDTO(c));
            this.contactService.changeContact(contactsList);
            this.router.navigateByUrl('/selection');
          } else {
            this.notificationService.danger('your file does not have contact in it!');
          }
        };
        reader.readAsText(files[0]);
      }
    }
  }

}
