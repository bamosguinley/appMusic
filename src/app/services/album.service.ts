import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album';
import { ALBUMS, ALBUM_LISTS } from '../mock-albums';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: Album[] = ALBUMS;
  albumsSongs: List[] = ALBUM_LISTS;
  constructor() {
   }
  getAlbums() {
    return this.albums;
  }
  getSongs() {
    return this.albumsSongs;
  }
}
