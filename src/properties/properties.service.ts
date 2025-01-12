import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Properties } from './properties.entity';
import { QueryRunner, Repository } from 'typeorm';

@Injectable()
export class PropertiesService {

    constructor(
        @InjectRepository(Properties)
        private propertiesRepository: Repository<Properties>
    ) {}

    public async findAll(): Promise<Properties[]> {
        return await this.propertiesRepository.find();
    }

    public async testFindAll(): Promise<any> {
        const queryRunner: QueryRunner = this.propertiesRepository.manager.connection.createQueryRunner();
        await queryRunner.connect();
        const result = await queryRunner.query(`SELECT * FROM properties`);
        await queryRunner.release();
        return result;
    }

    public async create(properties: Properties): Promise<Properties> {
        const newProperties = await this.propertiesRepository.create(properties);
        return await this.propertiesRepository.save(newProperties);
    }

    public async findById(id: number): Promise<Properties> {
        return await this.propertiesRepository.findOne({ where: { id } });
    }

    public async update(properties: Properties): Promise<Properties> {
        return await this.propertiesRepository.save(properties);
    }

    public async delete(id: number): Promise<void> {
        await this.propertiesRepository.delete({ id });
    }
}