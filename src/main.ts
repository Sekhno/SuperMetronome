import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {AppMobileComponent} from './app/app.mobile.component';
import {AudioService} from './app/core/services/audio.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {environment} from "./environments/environment";
import {provideExperimentalZonelessChangeDetection} from "@angular/core";

const isMobile = window.matchMedia("(pointer: coarse)").matches;
const rootComponent = isMobile ? AppMobileComponent : AppComponent;

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(rootComponent , {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    {
      provide: AudioService, useClass: AudioService
    }
  ]
}).then(() => {
  console.log('Bootstrap init!');
});
