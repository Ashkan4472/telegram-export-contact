import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    NotificationService,
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
