import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentspropertiesController } from './equipmentsproperties.controller';

describe('EquipmentspropertiesController', () => {
  let controller: EquipmentspropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentspropertiesController],
    }).compile();

    controller = module.get<EquipmentspropertiesController>(EquipmentspropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
