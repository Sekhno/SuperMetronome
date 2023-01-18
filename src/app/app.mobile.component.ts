import {AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RhythmFilterPipe} from "./core/pipes/rhythm-filter.pipe";
import {AppComponent} from "./app.component";
import {AudioService} from "./core/services/audio.service";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.mobile.component.html',
  styleUrls: ['./app.mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule, RhythmFilterPipe]
})
export class AppMobileComponent extends AppComponent implements AfterContentInit {

  public isPreload = false;
  public editNoteWidth = '40px';
  public editNoteHeight = '40px';
  public editNoteMarginBottom = '4px';

  public onFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().then(() => {
        console.log('Full screen');
        // screen.orientation.lock('landscape').then(() => {
        //   console.log('landscape');
        // })
        // screen.lockOrientation('landscape');
      })
    }
  }

  private _calcEditNoteSize() {
    const beats = 4;
    const subs = 4;
    const margin = (beats - 1) * 10;
    const footerHeight = innerHeight / 2;
    const height = footerHeight / 3;
    const size = (innerWidth - margin) / 16;
    const marginBottom = (footerHeight - 3 * size) / 2;
    console.log('> footer', innerWidth, innerHeight)
    console.log('height: ', height );
    console.log('size: ',  size);
    console.log('margin-bottom: ', marginBottom)
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
