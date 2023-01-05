import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {AudioService} from './app/core/services/audio.service';


bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: AudioService, useClass: AudioService
    }
  ]
}).then(() => {
  console.log('Bootstrap init!');
});
