import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RhythmFilterPipe} from "./core/pipes/rhythm-filter.pipe";
import {AppComponent} from "./app.component";
import {AudioService} from "./core/services/audio.service";
import {ControlSectionRoute} from "./core/types/aplication";
import {AutoScrollDirective} from "./core/directives/auto-scroll.directive";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.mobile.component.html',
  styleUrls: ['./app.mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule, RhythmFilterPipe, AutoScrollDirective]
})
export class AppMobileComponent extends AppComponent implements AfterContentInit {

  curSection = ControlSectionRoute.Default;

  public isPreload = true;
  public editNoteWidth = '40px';
  public editNoteHeight = '40px';
  public editNoteMarginBottom = '4px';

  public onFullscreen() {
    this.isPreload = false;
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().then(() => {
        console.log('Full screen');
        screen.orientation.lock('landscape').then(() => {
          alert('landscape');
        }).catch((e) => alert(JSON.stringify(e)))
        // screen.lockOrientation('landscape');
      })
    }
  }

  public setCurSection(section: ControlSectionRoute) {
    if (this.curSection === section) {
      this.curSection = ControlSectionRoute.Default;
    }
    else {
      this.curSection = section;
    }
  }

  private _calcEditNoteSize() {
    const beats = 4;
    const subs = 4;
    const margin = (beats - 1) * 10;
    const footerHeight = 0.4 * innerHeight;
    const height = footerHeight / 3;
    const size = (innerWidth - margin) / 16;
    const marginBottom = (footerHeight - 3 * size) / 2;
    this.editNoteHeight = this.editNoteWidth = `${size - 1}px`;
    this.editNoteMarginBottom = `${marginBottom - 4}px`;
  }

  constructor(
    audio: AudioService,
    cdr: ChangeDetectorRef
  ) {
    super(audio, cdr)
  }

  ngAfterContentInit(): void {
    this._calcEditNoteSize();
  }
}
