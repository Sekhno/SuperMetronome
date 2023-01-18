import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {AppMobileComponent} from './app/app.mobile.component';
import {AudioService} from './app/core/services/audio.service';

const isMobile = window.matchMedia("(pointer: coarse)").matches;
const rootComponent = isMobile ? AppMobileComponent : AppComponent;

bootstrapApplication(rootComponent , {

  providers: [
    {
      provide: AudioService, useClass: AudioService
    }
  ]
}).then(() => {
  console.log('Bootstrap init!');
});
