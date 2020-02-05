import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly notificationService: NotificationService,
  ) { }

  ngOnInit() {
  }

  fileUpload(files: File[]) {
    // TODO: Need to handle file in next page
    if (files && files.length > 0) {
      const fileType = files[0].type;
      if (fileType.indexOf('json') === -1) {
        this.notificationService.primary('file should be in json format.');
      }
    }
  }

}
