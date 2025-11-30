import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTaskController, CreateTaskHandler } from './create-task';

const CommandHandlers = [CreateTaskHandler];

@Module({
  imports: [CqrsModule],
  controllers: [CreateTaskController],
  providers: [...CommandHandlers],
})
export class TasksModule {}
