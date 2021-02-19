import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighliter]',
})
export class HighlighterDirective implements OnInit {
  constructor(public ref: ElementRef) {}
  ngOnInit(): void {
    this.ref.nativeElement.style.backgroundColor = 'yellow';
  }
}
