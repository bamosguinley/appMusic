import { Component, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albums: Album[] = [];
  albumId: string = '';
  @Input() sendPlayingAlbum: string = '';
  constructor(private albumService: AlbumService) {}
  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  getAlbum(albumId: string) {
    this.albumId = albumId;
  }
  getAlbumForPlay(e: string) {
    console.log(e);
    
    this.sendPlayingAlbum = e;
  }
}
