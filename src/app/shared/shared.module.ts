import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CounterComponent } from './counter/counter.component';
import { NoFoundComponent } from './no-found/no-found.component';

@NgModule({
  declarations: [CardsComponent, CounterComponent, NoFoundComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports: [CardsComponent, CounterComponent, NoFoundComponent],
})
export class SharedModule {}
