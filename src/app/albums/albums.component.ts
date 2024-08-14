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
  filtererdAlbum: Album[] = [];

  displayedAlbums: Album[] = []; //les données de pagination à afficher

  currentPage: number = 1; //page courrante

  pageNumber: number = 1; //nombre de page

  albumsPerPage: number = 2; //nombre d'album par page

  @Input() sendPlayingAlbum: string = '';
  constructor(private albumService: AlbumService) { }
  ngOnInit() {
    this.albums = this.albumService.getAlbums();
    this.loadAlbums();
    this.startLoading();
  }
  startLoading() {
    this.loaderCount = setTimeout(() => {
      this.loader = false;
      console.log(this.loader);
    }, 2000);
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
    if (this.queryString.trim().length > 0) {
      this.displayedAlbums = this.albums.filter((item) =>
        item.name.toLowerCase().includes(this.queryString.toLowerCase())
      );
    } else {
      this.butnPages(this.currentPage);
    }
  }

  getAlbumForPlay(e: string) {
    console.log(e);
    this.sendPlayingAlbum = e;
  }

  loadAlbums() {
    const startIndex = (this.currentPage - 1) * this.albumsPerPage;
    const endIndex = startIndex + this.albumsPerPage;
    this.displayedAlbums = this.albums.slice(startIndex, endIndex);
  }
  butnPages(n: number) {
    this.currentPage = n;
    this.loadAlbums();
  }
  nextPage() {
    this.currentPage++;
    this.loadAlbums();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadAlbums();
    }
  }
}
