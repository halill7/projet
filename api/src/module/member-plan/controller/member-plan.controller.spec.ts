import { Test, TestingModule } from '@nestjs/testing';
import { MemberPlanController } from './member-plan.controller';

describe('MemberPlanController', () => {
  let controller: MemberPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberPlanController],
    }).compile();

    controller = module.get<MemberPlanController>(MemberPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
