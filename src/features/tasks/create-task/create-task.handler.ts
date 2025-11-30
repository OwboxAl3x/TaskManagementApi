import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from './create-task.command';
import { PrismaService } from '../../../prisma';
import { Task } from '@prisma/client';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateTaskCommand): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: command.title,
        description: command.description,
      },
    });
  }
}
