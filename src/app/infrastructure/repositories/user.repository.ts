import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../domain/entities/User";

@Injectable({
    providedIn: 'root'
})

export class UserRepository{
    private readonly API_URL = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]>{

        return this.http.get<User[]>(this.API_URL);

    }
}