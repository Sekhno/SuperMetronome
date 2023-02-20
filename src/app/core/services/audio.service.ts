import {Injectable} from '@angular/core';
import {DrumHitsEnum, SimpleEnum} from '../enums/sounds.enum';
import {ArrayElement} from '../types/utils';
import {SoundEnum} from "../types/sound";

const SOUNDS_LIBRARY = [DrumHitsEnum.HiHat, DrumHitsEnum.Snare, DrumHitsEnum.Kick] as const;

type SoundLibraryType = ArrayElement<typeof SOUNDS_LIBRARY>



@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private gain= 1;
  public activeSounds = {
    [DrumHitsEnum.HiHat]: SoundEnum.HiHat_01,
    [DrumHitsEnum.Snare]: SoundEnum.Snare_01,
    [DrumHitsEnum.Kick]:  SoundEnum.Kick_01
  };

  private readonly audioCtx: AudioContext | null = null;
  private readonly buffers: Map<DrumHitsEnum | SimpleEnum, AudioBuffer> = new Map();
  private readonly gainNode: GainNode | null = null;

  public playSound(sound: DrumHitsEnum | SimpleEnum, gain: 0 | 1 | 2) {
    if (!this.audioCtx || !this.gainNode) throw Error();
    const source = this.audioCtx.createBufferSource();
    source.buffer = this._getBuffer(sound);
    source.connect(this.gainNode);
    this.gainNode.gain.value = gain === 1 ? 0.5 * this.gain : this.gain;
    this.gainNode.connect(this.audioCtx.destination);
    source.start(0);
    source.stop(source.buffer.length);
    source.onended = function() {
      source.buffer = source.onended = null;
      source.disconnect();
    }

  }

  public playCount() {

  }

  public setVolume(gain: number) {
    if (!this.gainNode) throw Error();
    this.gainNode.gain.value = gain;
    this.gain = gain;
  }

  public setActiveSounds(sounds: Record<DrumHitsEnum, SoundEnum>) {
    Object.entries(sounds).forEach(([drum, sound]) => {
      this.activeSounds[drum as DrumHitsEnum] = sound;
    });
    this._downloadBuffers();
  }

  private _getBuffer(sound: DrumHitsEnum | SimpleEnum): AudioBuffer {
    return this.buffers.get(sound) as AudioBuffer;
  }

  private _downloadBuffers() {
    SOUNDS_LIBRARY.forEach((soundName) => {
      const sound = this.activeSounds[soundName];
      this._loadAudio(`./assets/audio/${sound}.wav`)
        .then((buffer) => {
          this.buffers.set(soundName, buffer)
        });
    });

    this._loadAudio(`./assets/audio/${SoundEnum.Snare_06}.wav`)
      .then((buffer) => {
        this.buffers.set(SimpleEnum.Count, buffer);
      })
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

  constructor() {
    this.audioCtx = new AudioContext();
    this.gainNode = this.audioCtx.createGain();
    this._downloadBuffers();
  }


}
