import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.userService.findAll()
    }


    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.findOne(Number(id))
    }

    @Post()
    createUser(@Body() user: User) {
        return this.userService.create(user)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(Number(id));
    }
}
