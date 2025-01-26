import { Component, OnInit } from '@angular/core';
import { GetAlbumUseCase } from '../../../../domain/use-cases/get-album.use-case';
import { Observable } from 'rxjs';
import { Album } from '../../../../domain/models/Album';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumGateway } from '../../../../domain/models/album/gateway/AlbumGateway';

@Component({
  standalone: true ,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-list.component.html',
  styles: ``,
  
})
export default class AlbumListComponent implements OnInit{

  constructor(private _getAlbumUseCase: GetAlbumUseCase){}

  response$: Observable<Album> | undefined;

  datos?: Album;

  ngOnInit(): void {
    console.log("---- aca pas la prubea -----------------");
    this.response$ = this._getAlbumUseCase.getAlbumById('20');

    this.response$.subscribe(
      (data: Album) => {
        this.datos = data;
      }
    );
    
  }


}
