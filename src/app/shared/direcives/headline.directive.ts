import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHeadline]',
})
export class HeadlineDirective implements OnChanges {
  @Input()
  fontWeight = 'normal';

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    console.log(this.fontWeight);
    this.render.setStyle(this.elementRef.nativeElement, 'font-size', '35px');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.fontWeight);
    this.fontWeight = changes['fontWeight']?.currentValue;
    this.seFontWeight();
  }

  seFontWeight() {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'font-weight',
      this.fontWeight
    );
  }
}
