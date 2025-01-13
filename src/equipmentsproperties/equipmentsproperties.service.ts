import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentsProperties } from './equipmentsproperties.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquipmentspropertiesService {
    constructor(
        @InjectRepository(EquipmentsProperties)
        private equipmentsPropertiesRepository: Repository<EquipmentsProperties>
    ) {}

    public async findAll(): Promise<EquipmentsProperties[]> {
        return await this.equipmentsPropertiesRepository.find();
    }

    public async findById(id: number): Promise<EquipmentsProperties> {
        return await this.equipmentsPropertiesRepository.findOne({ where: { id } });
    }

    public async create(equipmentsProperties: EquipmentsProperties): Promise<EquipmentsProperties> {
        const newEquipmentsProperties = await this.equipmentsPropertiesRepository.create(equipmentsProperties);
        return await this.equipmentsPropertiesRepository.save(newEquipmentsProperties);
    }

    public async update(equipmentsProperties: EquipmentsProperties): Promise<EquipmentsProperties> {
        return await this.equipmentsPropertiesRepository.save(equipmentsProperties);
    }

    public async delete(id: number): Promise<void> {
        await this.equipmentsPropertiesRepository.delete({ id });
    }
}
