import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { ContactModel } from '../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textVcf = '';

  constructor(
    private readonly notificationService: NotificationService,
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
            this.router.navigateByUrl('/selection');
            // TODO: need to move in separate component
            // for (const c of contactJson.contacts.list) {
            //   if (c.phone_number) {
            //     this.textVcf += ContactModel.getVcfText(c.first_name, c.last_name, c.phone_number);
            //   }
            // }
            // const blob = new Blob([this.textVcf], {
            //   type: 'text/vcard',
            // });
            // const blobUrl = window.URL.createObjectURL(blob);
            // const anchor = document.createElement('a');
            // anchor.download = 'output.vcf';
            // anchor.href = blobUrl;
            // anchor.click();
          } else {
            this.notificationService.danger('your file does not have contact in it!');
          }
        };
        reader.readAsText(files[0]);
      }
    }
  }

}
