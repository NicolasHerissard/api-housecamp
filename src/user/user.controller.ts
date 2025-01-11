import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    public findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('create')
    public create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }
}