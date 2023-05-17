import { Test, TestingModule } from '@nestjs/testing';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';

describe('SessionsController', () => {
  let controller: SessionsController;
  const mockSessionService = {
    getSessions: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SessionsController],
      providers: [SessionsService],
    })
      .overrideProvider(SessionsService)
      .useValue(mockSessionService)
      .compile();

    controller = module.get<SessionsController>(SessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('Function: Get', () => {
    it('get all sessions', async () => {
      mockSessionService.getSessions.mockResolvedValueOnce({});
      const result = await controller.getSession();
      expect(result).toEqual({});
    });
  });
});
