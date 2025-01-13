import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentspropertiesService } from './equipmentsproperties.service';

describe('EquipmentspropertiesService', () => {
  let service: EquipmentspropertiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentspropertiesService],
    }).compile();

    service = module.get<EquipmentspropertiesService>(EquipmentspropertiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
