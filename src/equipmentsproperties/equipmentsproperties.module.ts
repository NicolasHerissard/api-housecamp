import { Module } from '@nestjs/common';
import { EquipmentspropertiesService } from './equipmentsproperties.service';
import { EquipmentspropertiesController } from './equipmentsproperties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentsProperties } from './equipmentsproperties.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EquipmentsProperties])
  ],
  providers: [EquipmentspropertiesService],
  controllers: [EquipmentspropertiesController],
  exports: [EquipmentspropertiesService],
})
export class EquipmentspropertiesModule {}
