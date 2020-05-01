import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../core/services/contact.service';
import { Subscription } from 'rxjs';
import { ContactModel } from '../models/contact.model';
import UIkit from 'uikit';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit, OnDestroy {
  private subscribers: Subscription[] = [];
  public contactList: ContactModel[];
  showModal: boolean = true;
  indexA: number;

  constructor(
    private readonly contactService: ContactService,
  ) {}

  ngOnInit() {
    this.subscribers.push(this.contactService.getContactObservable().subscribe(contacts => this.contactList = contacts));
  }

  ngOnDestroy() {
    this.subscribers.forEach(s => {
      s.unsubscribe();
    });
  }

  setRemoveIndex(index: number) {
    this.indexA = index;
    const element = UIkit.modal(document.getElementById('removeContactModal'));
    if (this.showModal) {
      element.show();
    } else {
      element.hide();
      this.deleteContact(false);
    }
  }

  deleteContact(showAgain: boolean) {
    this.contactList.splice(this.indexA, 1);
    this.showModal = showAgain;
  }

  downloadContact() {
    let textVcf: string = '';
    for (const contact of this.contactList) {
      if (contact.phoneNumber) {
        textVcf += ContactModel.getVcfText(contact.firstName, contact.lastName, contact.phoneNumber);
      }
    }
    const blob = new Blob([textVcf], {
      type: 'text/vcard',
    });
    const blobUrl = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'output.vcf';
    anchor.href = blobUrl;
    anchor.click();
  }
}
