import {AfterContentChecked, AfterContentInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {animate, linearAnimation} from "../functions/animation";

@Directive({
  standalone: true,
  selector: '[appAutoScroll]',
  host: {
    '(click)': 'handlerClick($event)',
    '(scroll)': 'handleScroll($event)'
  }
})
export class AutoScrollDirective implements OnChanges, AfterContentInit {
  @Input() activeItem = ''

  private curOffsetTop = 0;
  private curTimeoutId: number | null = null;

  public handlerClick(event: Event) {
    console.log(event.target)
    this.scrollToTop();
  }

  public handleScroll(event: Event) {
    // console.log(event.target)
    // const mainEl = this.el.nativeElement as HTMLUListElement;
    // const activeEl = this.el.nativeElement.querySelector('.active') as HTMLLIElement;
    // const mainRect = mainEl.getBoundingClientRect();
    // const activeRect = activeEl.getBoundingClientRect();
    // const positionTop = activeRect.top - mainRect.top;
    // console.log('positionTop', positionTop);
    // if (this.curTimeoutId) clearTimeout(this.curTimeoutId);
    // this.curTimeoutId = setTimeout(() => {
    //   this.curOffsetTop += positionTop - 3;
    //   console.log('this.curOffsetTop: ' + this.curOffsetTop)
    // }, 300)
  }

  private scrollToTop(isFirstContentInit = false) {
    const mainEl = this.el.nativeElement as HTMLUListElement;
    const activeEl = this.el.nativeElement.querySelector('.active') as HTMLLIElement;
    const mainRect = mainEl.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const positionTop = activeRect.top - mainRect.top;
    const newOffsetTop = activeEl.offsetTop - 3;

    if (isFirstContentInit) {
      this.curOffsetTop = newOffsetTop;
      mainEl.scroll({top: newOffsetTop})
    } else {
      animate({
        duration: 500,
        timing: linearAnimation,
        draw: (progress) => {
          const diff = newOffsetTop - this.curOffsetTop;
          mainEl.scroll({top: this.curOffsetTop + (diff * progress)});
          if (progress === 1) this.curOffsetTop = newOffsetTop;
        }
      })
    }
  }

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.activeItem)
  }


  ngAfterContentInit(): void {
    this.scrollToTop(true);
  }
}
