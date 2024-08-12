import { Component, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-album-player',
  templateUrl: './album-player.component.html',
  styleUrl: './album-player.component.css',
})
export class AlbumPlayerComponent {
  totalSteps: number = 0;
  currentStep: number = 0;
  timeStep: number = 0;
  progress: number = 0;
  album?: Album[];
  songNumber?: number;
  interval: any;
  @Input() playingId: string = '';
  constructor(private albumService: AlbumService) {}
  ngOnChanges(): void {
    this.album = this.albumService.getAlbums().filter((a) => a.id == this.playingId);
    this.songNumber = this.albumService.getSongs().filter((s) => s.id == this.playingId)[0].list.length;
    this.totalSteps = this.songNumber;
    // this.timeStep = this.album[0].duration*100 / this.totalSteps;
    // console.log(this.timeStep);
    
    this.getProgress();
  }

  ngOnInit() {
    if (this.totalSteps > 0) {
      this.progress = (this.currentStep / this.totalSteps) * 100;
    } else {
      this.progress = 0;
    }
  }
  getProgress() {
    if (this.currentStep <= this.totalSteps) {
      this.interval = setInterval(() => {
        this.currentStep ++;
        this.progress = (this.currentStep / this.totalSteps) * 100;
        console.log(this.currentStep + 'le total');
        clearInterval(this.interval);
        this.getProgress()
      }, 1000);
    } else {
      this.resetProgress();
    }
  }
  resetProgress() {
    this.progress = 0;
    this.currentStep = 0;
    this.playingId=''
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
