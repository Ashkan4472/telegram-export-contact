import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../core/services/contact.service';
import { Subscription } from 'rxjs';
import { ContactModel } from '../models/contact.model';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit, OnDestroy {
  private subscribers: Subscription[] = [];
  public contactList: ContactModel[];

  constructor(
    private readonly contactService: ContactService,
  ) {}

  ngOnInit() {
    this.subscribers.push(this.contactService.getContactObservable().subscribe(contacts => {
      this.contactList = contacts
      console.log(this.contactList);
    }));
  }

  ngOnDestroy() {
    this.subscribers.forEach(s => {
      s.unsubscribe();
    });
  }

  deleteContact(index: number) {
    this.contactList.splice(index, 1);

  }
}
