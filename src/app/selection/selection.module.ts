import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { ContactItemComponent } from './ contact-item/contact-item.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [
    SelectionComponent,
    ContactItemComponent,
  ],
  providers: [],
})
export class SelectionModule { }
