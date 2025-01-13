import { Module } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { EquipmentsController } from './equipments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Equipment])
  ],
  providers: [EquipmentsService],
  exports: [EquipmentsService],
  controllers: [EquipmentsController]
})
export class EquipmentsModule {}
