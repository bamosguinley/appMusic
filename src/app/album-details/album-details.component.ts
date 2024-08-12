import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Album } from '../interfaces/album';
import { AlbumService } from '../services/album.service';
import { List } from '../interfaces/list';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css',
})
export class AlbumDetailsComponent {
  @Input() currentAlbum?: string;
  @Output() sendToPlayer = new EventEmitter<string>();
  albums: Album[] = [];
  album: Album[] = [];
  albumsDetails: List[] = [];
  currentSongs: List[] = [];

  constructor(private albumService: AlbumService) {
    this.albumsDetails = this.albumService.getSongs();
  }
  ngOnChanges() {
    console.log(this.currentAlbum);
    if (this.currentAlbum) {
      this.albums = this.albumService.getAlbums();
      this.album = this.albums.filter((a) => a.id == this.currentAlbum);
      this.currentSongs = this.albumsDetails.filter(
        (a) => a.id == this.currentAlbum
      );
      console.log(this.currentSongs);
    }
  }

  startPlaying() {
    if (this.currentAlbum) {
      this.sendToPlayer.emit(this.currentAlbum);
    }
  }
}
