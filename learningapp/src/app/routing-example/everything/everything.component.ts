import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-everything',
  template: `
  <h2>Everything</h2>
  Size:{{size}}
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9
  GcR0UXyx2jQrCBBBw2N4ofFVw2oWz7keZjDVUB4UDrASE9JHwQdi">
  `,
  styles: []
})
export class EverythingComponent implements OnInit {

  public size: string = '';
  constructor( private activatedRoute: ActivatedRoute) {
    // for one time 
    console.log('hi this is printing from consle log', this.activatedRoute.snapshot.params.size);

    activatedRoute.params.subscribe( params => {

      // for every navigation we are getting this 
      console.log('from subscription', params['size'] )
      this.size = params['size']});
  }

  ngOnInit() {
  }

}
