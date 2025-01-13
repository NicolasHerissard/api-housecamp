/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { PropertiesModule } from './properties/properties.module';
import { Properties } from './properties/properties.entity';
import { EquipmentsModule } from './equipments/equipments.module';
import { Equipment } from './equipments/equipment.entity';
import { EquipmentspropertiesModule } from './equipmentsproperties/equipmentsproperties.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'housecamp',
      entities: [User, Properties, Equipment],
      synchronize: true,
    }),
    UserModule,
    PropertiesModule,
    EquipmentsModule,
    EquipmentspropertiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}