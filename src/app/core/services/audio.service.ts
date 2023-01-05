import { Injectable } from '@angular/core';
import { SoundsEnum } from '../enums/sounds.enum';
import { ArrayElement } from '../types/utils';

const SOUNDS_LIBRARY = [SoundsEnum.HiHat, SoundsEnum.Snare, SoundsEnum.Kick] as const;

type SoundLibraryType = ArrayElement<typeof SOUNDS_LIBRARY>

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private readonly audioCtx: AudioContext | null = null;
  private readonly buffers: Map<SoundsEnum, AudioBuffer> = new Map();

  constructor() {
    this.audioCtx = new AudioContext();

    SOUNDS_LIBRARY.forEach((soundName) => {
      this._loadAudio(`./assets/audio/DTV1/[DTV1]_${soundName}_01.wav`)
        .then((buffer) => {
          this.buffers.set(soundName, buffer)
        });
    })
  }


  public playSound(sound: SoundsEnum) {
    if (!this.audioCtx) throw Error();
    const source = this.audioCtx.createBufferSource();
    source.buffer = this._getBuffer(sound);
    source.connect(this.audioCtx.destination);
    source.start(0);
    source.stop(source.buffer.length);
    source.onended = function() {
      source.buffer = source.onended = null;
      source.disconnect();
    }

  }

  private _getBuffer(sound: SoundsEnum): AudioBuffer {
    return this.buffers.get(sound) as AudioBuffer;
  }

  private _loadAudio(url: string): Promise<AudioBuffer> {
    return new Promise((resolve) => {
      if (!this.audioCtx) throw Error();
      const context = this.audioCtx;
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'arraybuffer';
      request.onload = function() {
        context.decodeAudioData(request.response,
          (buffer) => resolve(buffer)
        ).then((buffer) => resolve(buffer));
      }
      request.send();
    })
  }

}
