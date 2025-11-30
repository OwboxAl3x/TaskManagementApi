import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTaskDto } from './create-task.dto';
import { CreateTaskCommand } from './create-task.command';
import { Task } from '@prisma/client';

@Controller('tasks')
export class CreateTaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async execute(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.commandBus.execute(
      new CreateTaskCommand(dto.title, dto.description),
    );
  }
}
