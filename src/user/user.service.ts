import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    public async findByName(name: string): Promise<User> {
        return await this.usersRepository.findOne({ where: { name } });
    }

    public async create(user: User): Promise<User> {
        const newUser = await this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

    public async findById(id: number): Promise<User> {
        return await this.usersRepository.findOne({ where: { id } });
    }

    public async update(user: User): Promise<User> {
        return await this.usersRepository.save(user);
    }

    public async delete(id: number): Promise<void> {
        await this.usersRepository.delete({ id });
    }
}