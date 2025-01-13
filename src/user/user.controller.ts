import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    @HttpCode(200)
    public findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    public findByEmail(@Param('id') id: number): Promise<User> {
        return this.userService.findById(id);
    }

    @Post('create')
    @HttpCode(201)
    public create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put('update/:id')
    @HttpCode(200)
    public async update(@Param('id') id: number, @Body() user: User): Promise<User> {
        const existingUser = await this.userService.findById(id);
        if(!existingUser) {
            throw new NotFoundException('Utilisateur introuvable avec l\'id ' + id);
        }

        const updatedUser = Object.assign(existingUser, user);
        return this.userService.update(updatedUser);
    }

    @Delete('delete/:id')
    @HttpCode(204)
    public async delete(@Param('id') id: number): Promise<void> {
        const existingUser = await this.userService.findById(id);
        if(!existingUser) {
            throw new NotFoundException('Utilisateur introuvable avec l\'id ' + id);
        }
        return this.userService.delete(id);
    }
}