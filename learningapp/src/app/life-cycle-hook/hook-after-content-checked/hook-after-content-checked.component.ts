import { Component, OnInit, AfterContentChecked, ContentChild } from '@angular/core';
import { CardComponent } from './card/card.component';

const CARD_ACE_OF_SPADES = 'ace of spades';
const CARD_TEN_OF_CLUBS = 'ten of clubs';

@Component({
  selector: 'app-hook-after-content-checked',
  templateUrl: './hook-after-content-checked.component.html',
  styleUrls: ['./hook-after-content-checked.component.css']
})
export class HookAfterContentCheckedComponent implements AfterContentChecked {


  card = CARD_ACE_OF_SPADES;
  constructor() { }

  @ContentChild(CardComponent, {static: false})
  contentChild: CardComponent;

  ngAfterContentChecked() {
    console.log('content inside card has been checked: ' + this.card);
  }

  pickCard() {
    this.card = this.card === CARD_ACE_OF_SPADES ? CARD_TEN_OF_CLUBS : CARD_ACE_OF_SPADES;
    }

}
