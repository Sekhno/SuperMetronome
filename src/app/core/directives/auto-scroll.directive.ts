import {AfterContentInit, Directive, ElementRef} from '@angular/core';
import {animate, linearAnimation} from "../functions/animation";

@Directive({
  standalone: true,
  selector: '[appAutoScroll]',
  host: {
    '(click)': 'handlerClick()',
    '(scroll)': 'handleScroll($event)'
  }
})
export class AutoScrollDirective implements AfterContentInit {

  private curOffsetTop = 0;

  public handlerClick() {
    this.scrollToTop();
  }

  public handleScroll(event: Event) {
    console.log(event)
  }

  private scrollToTop(isFirstContentInit = false) {
    const mainEl = this.el.nativeElement as HTMLUListElement;
    const activeEl = this.el.nativeElement.querySelector('.active') as HTMLLIElement;
    const mainRect = mainEl.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const positionTop = activeRect.top - mainRect.top;
    const newOffsetTop = activeEl.offsetTop;

    console.log('activeEl', activeEl.offsetTop);

    if (isFirstContentInit) {
      this.curOffsetTop = newOffsetTop;
      mainEl.scroll({ top: newOffsetTop })
    } else {
      animate({
        duration: 500,
        timing: linearAnimation,
        draw: (progress) => {
          const diff = newOffsetTop - this.curOffsetTop;
          mainEl.scroll({ top: this.curOffsetTop + (diff * progress) });
          if (progress === 1) {
            this.curOffsetTop = newOffsetTop;
          }
        }
      })
    }




  }

  constructor(private el: ElementRef) {}

  ngAfterContentInit(): void {
    this.scrollToTop(true);
  }

}
