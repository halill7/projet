import { Test, TestingModule } from '@nestjs/testing';
import { MemberPlanService } from './member-plan.service';

describe('MemberPlanService', () => {
  let service: MemberPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberPlanService],
    }).compile();

    service = module.get<MemberPlanService>(MemberPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
