import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { Equipment } from './equipment.entity';

@Controller('equipments')
export class EquipmentsController {

    constructor(
        private equipmentsService: EquipmentsService
    ) {}

    @Get()
    @HttpCode(200)
    public findAll(): Promise<Equipment[]> {
        return this.equipmentsService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    public findById(@Param('id') id: number): Promise<Equipment> {
        if(!id) {
            throw new NotFoundException('Cette id n\'existe pas')
        }

        return this.equipmentsService.findById(id);
    }

    @Post('create')
    @HttpCode(201)
    public create(@Body() equipment: Equipment): Promise<Equipment> {
        return this.equipmentsService.create(equipment);
    }

    @Put('update/:id')
    @HttpCode(200)
    public async update(@Param('id') id: number, @Body() equipment: Equipment): Promise<Equipment> {
        const existingEquipment = await this.equipmentsService.findById(id);
        if(!existingEquipment) {
            throw new NotFoundException('Equipement introuvable avec l\'id ' + id);
        }

        const updatedEquipment = Object.assign(existingEquipment, equipment);
        return this.equipmentsService.update(updatedEquipment);
    }

    @Delete('delete/:id')
    @HttpCode(204)
    public async delete(@Param('id') id: number): Promise<void> {
        const existingEquipment = await this.equipmentsService.findById(id);
        if(!existingEquipment) {
            throw new NotFoundException('Equipement introuvable avec l\'id ' + id);
        }
        return this.equipmentsService.delete(id);
    }
}
