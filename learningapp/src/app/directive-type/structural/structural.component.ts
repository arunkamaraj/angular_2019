import { Component, OnInit } from '@angular/core';
import { DirectiveTypeComponent } from '../directive-type.component';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  showName = true; // *ngIF
  lanList: any[] = ['angular', 'python', 'django', 'sql'];

  selection = 'name';
  options = ['name', 'address', 'other'];

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.showName = !this.showName;
  }
}
