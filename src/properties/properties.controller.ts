import { Controller, Get } from '@nestjs/common';
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

    @Get('test')
    public test(): Promise<any> {
        return this.propertiesService.testFindAll();
    }
}
