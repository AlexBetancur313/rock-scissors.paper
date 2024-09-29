import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  machineScore: number = 0;
  humanScore: number = 0;

  incrementMachineScore() {
    this.machineScore++;
  }

  incrementHumanScore() {
    this.humanScore++;
  }

  resetScores() {
    this.machineScore = 0;
    this.humanScore = 0;
  }
}
