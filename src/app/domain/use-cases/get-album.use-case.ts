import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/Album';
import { AlbumGateway } from '../models/album/gateway/AlbumGateway';


@Injectable({
    providedIn: 'root'
})

export class GetAlbumUseCase{
    constructor(private _albumGateway: AlbumGateway){}

    getAlbumById(id: string): Observable<Album>{
        return this._albumGateway.getByID(id);
    }

    getAllAlbum() : Observable<Album[]>{
        return this._albumGateway.getAll();
    }
}