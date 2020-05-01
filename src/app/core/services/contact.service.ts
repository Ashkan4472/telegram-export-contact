import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactModel } from 'src/app/models/contact.model';

@Injectable()
export class ContactService {
  private contactSubject = new BehaviorSubject<ContactModel[]>(null);

  changeContact(contact: ContactModel[]) {
    this.contactSubject.next(contact);
  }

  getContactObservable(): Observable<ContactModel[]> {
    return this.contactSubject.asObservable();
  }
}
