import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  options: string[] = ['rock', 'paper', 'scissors'];
  countdown: number = 0;
  humanChoice: string = '';
  machineChoice: string = '';
  resultMessage: string = '';
  showResults: boolean = false;
  humanScore: number = 0;
  machineScore: number = 0;

  play(userChoice: string) {
    this.humanChoice = userChoice;
    this.countdown = 3;

    const countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(countdownInterval);
        this.determineWinner();
        this.showResults = true; // Muestra el resultado cuando se determina el ganador
      }
    }, 1000);
  }

  determineWinner() {
    this.machineChoice =
      this.options[Math.floor(Math.random() * this.options.length)];

    if (this.humanChoice === this.machineChoice) {
      this.resultMessage = 'seriously you tied with the machine🤨🤨';
    } else if (
      (this.humanChoice === 'rock' && this.machineChoice === 'scissors') ||
      (this.humanChoice === 'paper' && this.machineChoice === 'rock') ||
      (this.humanChoice === 'scissors' && this.machineChoice === 'paper')
    ) {
      this.resultMessage = 'You are a fucking winner !!!!😎😎 ';
      this.humanScore++;
    } else {
      this.resultMessage = 'You are a loser!!!!😂😂';
      this.machineScore++;
    }
  }

  resetGame() {
    this.countdown = 0;
    this.humanChoice = '';
    this.machineChoice = '';
    this.resultMessage = '';
    this.showResults = false;
  }

  getImage(choice: string): string {
    if (choice === 'rock') {
      return '../../assets/figures/piedra.png';
    } else if (choice === 'paper') {
      return '../../assets/figures/papel.png';
    } else if (choice === 'scissors') {
      return '../../assets/figures/tijera.png';
    } else {
      return '';
    }
  }
}
