import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { ContactService } from './services/contact.service';
import { SelectionGuard } from './guard/selection.guard';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    NotificationService,
    ContactService,
    SelectionGuard,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
