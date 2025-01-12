import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Properties } from './properties.entity';

@Controller('properties')
export class PropertiesController {
    constructor(
        private propertiesService: PropertiesService
    ) {}

    @Get()
    public findAll(): Promise<Properties[]> {
        return this.propertiesService.findAll();
    }

    @Get(':id')
    public findById(@Param('id') id: number): Promise<Properties> {
        return this.propertiesService.findById(id);
    }

    @Post('create')
    public create(@Body() properties: Properties): Promise<Properties> {
        return this.propertiesService.create(properties);
    }

    @Put('update/:id')
    public async update(@Param('id') id: number, @Body() properties: Properties): Promise<Properties> {
        const existingProperties = await this.propertiesService.findById(id);
        if(!existingProperties) {
            throw new Error('Properties introuvable avec l\'id ' + id);
        }

        const updatedProperties = Object.assign(existingProperties, properties);
        return this.propertiesService.update(updatedProperties);
    }

    @Delete('delete/:id')
    public async delete(@Param('id') id: number): Promise<void> {
        const existingProperties = await this.propertiesService.findById(id);
        if(!existingProperties) {
            throw new Error('Properties introuvable avec l\'id ' + id);
        }
        return this.propertiesService.delete(id);
    }
}
