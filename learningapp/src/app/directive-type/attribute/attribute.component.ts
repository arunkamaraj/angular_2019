import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styles: [
    '.selected { color: white; background-color:red; padding: 10px; margin: 10px }',
    '.unselected { background-color: white; padding: 10px; margin: 10px}'
    ]
})
export class AttributeComponent implements OnInit {

  selectedAnimal = 'cat';
  animals = ['cat', 'dog', 'zebra', 'giraffe'];
  constructor() { }

  ngOnInit() {
  }

  public onAnimalClicked(event: any) {
    const clickedAnimal = event.target.innerHTML.trim();
    console.log(clickedAnimal);
    this.selectedAnimal = clickedAnimal;
    }
}
