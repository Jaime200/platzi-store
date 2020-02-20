import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( 
    private elemento: ElementRef
  ) { 
    this.elemento.nativeElement.style.backgroundColor = 'red';
  }

}
