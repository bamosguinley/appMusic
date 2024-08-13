import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrl: './album-search.component.css',
})
export class AlbumSearchComponent {
  query: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch(){
   this.searchEvent.emit(this.query);
  }
}
