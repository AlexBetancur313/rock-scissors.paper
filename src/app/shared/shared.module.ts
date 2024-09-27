import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CardsComponent, CounterComponent],
  imports: [CommonModule],
  exports: [CardsComponent, CounterComponent],
})
export class SharedModule {}
