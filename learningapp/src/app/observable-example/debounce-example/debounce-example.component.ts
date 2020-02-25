import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-debounce-example',
  template: `
    <p>
      debounce-example works!
    </p>
    Search: <input type="text" (keyup)="onChange($event.target.value)"/>
    <div *ngFor="let log of _logs">Search:&nbsp;{{log}}</div>
  `,
  styles: []
})
export class DebounceExampleComponent {
  public searchText: string;
  public _searchSubject: Rx.Subject<string>;
  public _logs: Array<string> = [];

  constructor() {
      // Create new Subject.
      this._searchSubject = new Rx.Subject<string>();
      // Set the Subject up to subscribe to events and filter them by
      // debounce events and ensure they are distinct.
      this._searchSubject.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(
      // Handle event. Log it.
      searchText => this._logs.push(searchText)
      );
    }

  public onChange(searchText: string) {
    // Emit an event to the Subject.
    this._searchSubject.next(searchText);
  }


}
