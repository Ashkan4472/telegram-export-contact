import { ContactService } from '../services/contact.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class SelectionGuard implements CanActivate {
  constructor(
    private readonly contactService: ContactService,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
  ) {}

  canActivate(): boolean {
    const c =this.contactService.getCurrent()
    if(c && c.length > 0) {
      return true;
    }
    this.router.navigate(['/']);
    this.notificationService.danger('please upload your file first.');
    return false;
  }
}
