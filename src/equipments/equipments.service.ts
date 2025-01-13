import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquipmentsService {
    constructor(
        @InjectRepository(Equipment)
        private equipmentsRepository: Repository<Equipment>
    ) {}

    public async findAll(): Promise<Equipment[]> {
        return await this.equipmentsRepository.find();
    }

    public async findById(id: number): Promise<Equipment> {
        return await this.equipmentsRepository.findOne({ where: { id } });
    }

    public async create(equipment: Equipment): Promise<Equipment> {
        const newEquipment = await this.equipmentsRepository.create(equipment);
        return await this.equipmentsRepository.save(newEquipment);
    }

    public async update(equipment: Equipment): Promise<Equipment> {
        return await this.equipmentsRepository.save(equipment);
    }

    public async delete(id: number): Promise<void> {
        await this.equipmentsRepository.delete({ id });
    }
}
