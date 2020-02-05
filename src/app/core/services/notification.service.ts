import { Injectable } from '@angular/core';

declare var UIkit: any;

@Injectable()
export class NotificationService {

  constructor() {}

  primary(message: string) {
    UIkit.notification({
      message,
      status: 'primary',
      pos: 'top-center',
      timeout: 5000
    });
  }

  warning(message: string) {
    UIkit.notification({
      message,
      status: 'warning',
      pos: 'top-center',
      timeout: 5000
    });
  }

  danger(message?: string) {
    UIkit.notification({
      message: message ? message : 'Something went wrong, please try again.',
      status: 'danger',
      pos: 'top-center',
      timeout: 5000
    });
  }
}
