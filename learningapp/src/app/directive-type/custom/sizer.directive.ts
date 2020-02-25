import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective implements OnInit {

  @Input('appSizer')
  public size: string;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {

              }
  
  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.elRef, this.size);
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', this.size);
  }

}
