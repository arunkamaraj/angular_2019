import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-view-reference',
  templateUrl: './view-reference.component.html',
  styleUrls: ['./view-reference.component.css']
})
export class ViewReferenceComponent implements AfterViewInit {

  button1 = 'arun';
  button2 = 'kiruthika';
  button3 = 'tanvi';
  @ViewChild('sample', {static: false})
  sampleData: ElementRef;

  @ViewChild(CustomButtonComponent, {static: false})
  buttonComponent: CustomButtonComponent;

  @ViewChildren('paragraph1, paragraph2')
  paragraphs: any;

  note: string = '';

  constructor() { }

  ngAfterViewInit() {
    this.sampleData.nativeElement.innerHTML = 'This is fed by view child template reference ';

    /**
     *  component types, directive types, and template reference variables.
     * You cannot retrieve DOM elements with ViewChildren using CSS selectors like HTML element types (e.g. div)
     */
    console.log(this.buttonComponent);

    // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
    setTimeout(() => {
      this.buttonComponent.buttonName = 'this is updated from view child';
    }, 1);

    // For  view children
    // this.note = 'Number of Paragraphs:' +
    //     this.paragraphs.length;
    setTimeout(() => this.note = 'Number of Paragraphs:' +
        this.paragraphs.length
        );

  }
}
