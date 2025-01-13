import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Properties } from './properties.entity';

@Controller('properties')
export class PropertiesController {
    constructor(
        private propertiesService: PropertiesService
    ) {}

    @Get()
    @HttpCode(200)
    public findAll(): Promise<Properties[]> {
        return this.propertiesService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    public findById(@Param('id') id: number): Promise<Properties> {
        return this.propertiesService.findById(id);
    }

    @Post('create')
    @HttpCode(201)
    public create(@Body() properties: Properties): Promise<Properties> {
        return this.propertiesService.create(properties);
    }

    @Put('update/:id')
    @HttpCode(200)
    public async update(@Param('id') id: number, @Body() properties: Properties): Promise<Properties> {
        const existingProperties = await this.propertiesService.findById(id);
        if(!existingProperties) {
            throw new Error('Properties introuvable avec l\'id ' + id);
        }

        const updatedProperties = Object.assign(existingProperties, properties);
        return this.propertiesService.update(updatedProperties);
    }

    @Delete('delete/:id')
    @HttpCode(204)
    public async delete(@Param('id') id: number): Promise<void> {
        const existingProperties = await this.propertiesService.findById(id);
        if(!existingProperties) {
            throw new Error('Properties introuvable avec l\'id ' + id);
        }
        return this.propertiesService.delete(id);
    }
}
