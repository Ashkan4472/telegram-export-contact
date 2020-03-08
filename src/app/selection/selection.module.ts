import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { ContactItemComponent } from './ contact-item/contact-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [
    SelectionComponent,
    ContactItemComponent,
  ],
  providers: [],
})
export class SelectionModule { }
