import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { MemberComponent} from '../member/member.component';

@Component({
  selector: 'app-crew',
  template: `
  <p><ng-content></ng-content></p>
  `,
  styles: []
  })
  export class CrewComponent implements AfterContentInit {
    @ContentChildren(MemberComponent) members:
    QueryList<MemberComponent>;
    ngAfterContentInit() {
      this.members.first.selected = true;
      console.log(this.members); // we have fist and last element in our app.
    }
  }