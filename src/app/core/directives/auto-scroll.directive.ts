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

  private currentPosition = 0;

  public handlerClick(event: Event) {
    console.log(event.target)
    this.scrollToTop();
  }

  public handleScroll(event: Event) {

  }

  private scrollToTop(isFirstContentInit = false) {
    const container = this.el.nativeElement as HTMLUListElement;
    const element = this.el.nativeElement.querySelector('.active') as HTMLLIElement;
    const selectedItemTop = element.offsetTop;
    const selectedItemHeight = element.offsetHeight;
    const containerHeight = container.offsetHeight;
    const containerScrollTop = container.scrollTop;
    const result = (selectedItemTop - (containerHeight - selectedItemHeight) / 2);

    if (isFirstContentInit) {
      container.scrollTop = result;
    }
    else {
      animate({
        duration: 500,
        timing: linearAnimation,
        draw: (progress) => {
          container.scrollTop = (result - containerScrollTop) * progress + containerScrollTop;
        }
      })
    }
  }

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.activeItem.firstChange) {
      setTimeout(() => this.scrollToTop())
    }
  }

  ngAfterContentInit(): void {
    this.scrollToTop(true);
  }
}
