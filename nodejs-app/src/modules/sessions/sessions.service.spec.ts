import { Test, TestingModule } from '@nestjs/testing';
import { SessionsService } from './sessions.service';

describe('SessionsService', () => {
  let service: SessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionsService],
    }).compile();

    service = module.get<SessionsService>(SessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Function: GetSessions', () => {
    it('should get sessions with query short_title valid', async () => {
      const shortTitle = 'vc';
      const result = await service.getSessions({ short_title: shortTitle });
      expect(result.total).toBe(15);
    });

    it('should get sessions with query status valid', async () => {
      const status = 'running';
      const result = await service.getSessions({ status });
      expect(result.total).toBe(10);
    });

    it('should get sessions no query', async () => {
      const result = await service.getSessions({});
      expect(result).toBeDefined();
    });
  });
});
