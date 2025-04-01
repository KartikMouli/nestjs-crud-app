import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
    private users: User[] = [];


    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User | undefined {
        return this.users.find(user => user.id === id)
    }

    create(user: User) {
        user.id = this.users.length + 1;
        this.users.push(user)
        return user
    }

    delete(id: number): boolean {
        const idx = this.users.findIndex(user => user.id === id);
        if (idx === -1) return false;

        this.users.splice(idx, 1);
        return true;
    }

    

}
