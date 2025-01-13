import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { EquipmentsProperties } from './equipmentsproperties.entity';
import { EquipmentspropertiesService } from './equipmentsproperties.service';

@Controller('equipmentsproperties')
export class EquipmentspropertiesController {

    constructor(
        private equipmentspropertiesService: EquipmentspropertiesService
    ) {}

    @Get()
    @HttpCode(200)
    public async findAll(): Promise<EquipmentsProperties[]> {
        return await this.equipmentspropertiesService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    public async findById(@Param('id') id: number): Promise<EquipmentsProperties> {
        return await this.equipmentspropertiesService.findById(id);
    }

    @Post('create')
    @HttpCode(201)
    public async create(@Body() equipmentsProperties: EquipmentsProperties): Promise<EquipmentsProperties> {
        return await this.equipmentspropertiesService.create(equipmentsProperties);
    }

    @Put('update/:id')
    @HttpCode(200)
    public async update(@Param('id') id: number, @Body() equipmentsProperties: EquipmentsProperties): Promise<EquipmentsProperties> {
        const existingEquipmentsProperties = await this.equipmentspropertiesService.findById(id);
        if(!existingEquipmentsProperties) {
            throw new Error('EquipmentsProperties introuvable avec l\'id ' + id);
        }

        const updatedEquipmentsProperties = Object.assign(existingEquipmentsProperties, equipmentsProperties);
        return await this.equipmentspropertiesService.update(updatedEquipmentsProperties);
    }

    @Delete('delete/:id')
    @HttpCode(204)
    public async delete(@Param('id') id: number): Promise<void> {
        const existingEquipmentsProperties = await this.equipmentspropertiesService.findById(id);
        if(!existingEquipmentsProperties) {
            throw new Error('EquipmentsProperties introuvable avec l\'id ' + id);
        }
        return await this.equipmentspropertiesService.delete(id);
    }
}
