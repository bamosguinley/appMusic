import { Component, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  queryString: string = '';
  albums: Album[] = [];
  albumId: string = '';
  loader: boolean = true;
  loaderCount?: any;
  filtererdAlbum:Album[]=[];
  @Input() sendPlayingAlbum: string = '';
  constructor(private albumService: AlbumService) {}
  ngOnInit() {
    this.albums = this.albumService.getAlbums();
      this.startLoading();
  
  }
  startLoading() {
      this.loaderCount = setTimeout(() => {
        this.loader=false;
        console.log(this.loader); 
      },2000)
  }
  getAlbum(albumId: string) {
    this.albumId = albumId;
  }

  handleSearch(query: string): void {
    this.queryString = query;
    console.log(this.queryString);
    this.filterItems();
  }

  public filterItems(): void {
    if (this.queryString.trim().length>0 ) {
      this.albums= this.albums.filter((item) =>
        item.name.toLowerCase().includes(this.queryString.toLowerCase())
      );
    } else {
      this.albums = this.albumService.getAlbums();
    }
  }

  getAlbumForPlay(e: string) {
    console.log(e);
    this.sendPlayingAlbum = e;
  }

}
