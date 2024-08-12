import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrl: './album-description.component.css'
})
export class AlbumDescriptionComponent {
  album: Album[] = [];
  albums: Album[] = [];
  albumId?: string;
  constructor(private route: ActivatedRoute,private albumService:AlbumService) {
  }
  ngOnInit() {
    this.route.params.subscribe((params) => this.albumId = params['id']);
    this.albums = this.albumService.getAlbums();
    this.album = this.albums.filter((a) => a.id == this.albumId)
    console.log(this.album);
    
  }
}
