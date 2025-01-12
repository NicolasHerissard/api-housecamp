import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
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

    @Get(':id')
    public findByEmail(@Param('id') id: number): Promise<User> {
        return this.userService.findById(id);
    }

    @Post('create')
    public create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put('update/:id')
    public async update(@Param('id') id: number, @Body() user: User): Promise<User> {
        const existingUser = await this.userService.findById(id);
        if(!existingUser) {
            throw new NotFoundException('Utilisateur introuvable avec l\'id ' + id);
        }

        const updatedUser = Object.assign(existingUser, user);
        return this.userService.update(updatedUser);
    }

    @Delete('delete/:id')
    public async delete(@Param('id') id: number): Promise<void> {
        const existingUser = await this.userService.findById(id);
        if(!existingUser) {
            throw new NotFoundException('Utilisateur introuvable avec l\'id ' + id);
        }
        return this.userService.delete(id);
    }
}