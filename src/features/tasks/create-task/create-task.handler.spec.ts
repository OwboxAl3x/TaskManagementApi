import { Test, TestingModule } from '@nestjs/testing';
import { CreateTaskHandler } from './create-task.handler';
import { CreateTaskCommand } from './create-task.command';
import { PrismaService } from '../../../prisma';

describe('CreateTaskHandler', () => {
  let handler: CreateTaskHandler;
  let mockCreate: jest.Mock;

  const mockTask = {
    id: 'test-uuid',
    title: 'Test Task',
    description: 'Test Description',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    mockCreate = jest.fn().mockResolvedValue(mockTask);

    const mockPrismaService = {
      task: {
        create: mockCreate,
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateTaskHandler,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    handler = module.get<CreateTaskHandler>(CreateTaskHandler);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('execute', () => {
    it('should create a task with title and description', async () => {
      const command = new CreateTaskCommand('Test Task', 'Test Description');

      const result = await handler.execute(command);

      expect(result).toEqual(mockTask);
      expect(mockCreate).toHaveBeenCalledWith({
        data: {
          title: 'Test Task',
          description: 'Test Description',
        },
      });
    });

    it('should create a task with only title', async () => {
      const command = new CreateTaskCommand('Test Task');

      await handler.execute(command);

      expect(mockCreate).toHaveBeenCalledWith({
        data: {
          title: 'Test Task',
          description: undefined,
        },
      });
    });
  });
});
