import { Observable } from "rxjs"
import { User } from "../entities/User" 

export abstract class GetUserUseCase{
    abstract execute(): Observable<User[]>;
}