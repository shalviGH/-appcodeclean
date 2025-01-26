import { Injectable } from "@angular/core";
import { GetUserUseCase } from "../../domain/use-cases/get-users.use-case";
import { User } from "../../domain/entities/User";
import { Observable } from "rxjs";
import { UserRepository } from "../../infrastructure/repositories/user.repository";


@Injectable({
    providedIn: 'root'
})

export class GetUsersService implements GetUserUseCase{
    constructor(private userRepository: UserRepository){}

    execute(): Observable<User[]> {
        return this.userRepository.getUsers();
    }
}