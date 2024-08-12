import { Component } from '@angular/core';

@Component({
  selector: 'app-album-player',
  templateUrl: './album-player.component.html',
  styleUrl: './album-player.component.css',
})
export class AlbumPlayerComponent {
 totalSteps: number = 10; 
  currentStep: number = 0;

  progress: number = 0;

  ngOnChanges(): void {
    if (this.totalSteps > 0) {
      this.progress = (this.currentStep / this.totalSteps) * 100;
    } else {
      this.progress = 0;
    }
  }
}
