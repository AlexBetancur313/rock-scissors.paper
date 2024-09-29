import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Output() cardselect = new EventEmitter<string>();
  selectcard(card: string) {
    this.cardselect.emit(card);
  }
}
