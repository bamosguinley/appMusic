import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appMusic';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  private timer: any;
  private totalSeconds: number = 0;

  ngOnInit(): void {
    this.startTimer();
  }
  formatTime(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
  startTimer(): void {
    this.timer = setInterval(() => {
      this.totalSeconds++;

      this.hours = this.formatTime(Math.floor(this.totalSeconds / 3600));
      this.minutes = this.formatTime(
        Math.floor((this.totalSeconds % 3600) / 60)
      );
      this.seconds = this.formatTime(this.totalSeconds % 60);
    }, 1000);
  }
}
