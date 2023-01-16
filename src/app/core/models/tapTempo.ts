import {BehaviorSubject} from "rxjs";

export class TapTempo {
  private readonly timeout = 2000;
  private times: number[] = [];
  private lastTime: number | null = null;
  private lastDifference: number | null = null;
  private timer:  ReturnType<typeof setTimeout> | null = null;

  private _subject = new BehaviorSubject(0);
  public bpm = this._subject.asObservable();

  constructor() {
  }

  public tap() {
    const time = Date.now()
    if (this.lastTime) {
      this.lastDifference = time - this.lastTime
      this.times.push(this.lastDifference)
      this._refresh()
    }
    this.lastTime = time
    this._beginTimeout()

  }

  private _refresh() {
    if (this.times.length > 2){
      const average = this.times.reduce((result, t) => { return result += t }) / this.times.length
      const bpm = (1 / (average / 1000)) * 60;
      this._subject.next(Math.round(bpm));
    }
  }

  private _beginTimeout() {
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.times = [this.lastDifference || 0]
      this.lastTime = null
    }, this.timeout)
  }
}
