import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { LoggerModule } from 'nestjs-pino';
import { PrismaModule } from './prisma';
import { TasksModule } from './features/tasks';

@Module({
  imports: [
    CqrsModule.forRoot(),
    PrismaModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        transport:
          process.env.NODE_ENV !== 'production'
            ? { target: 'pino-pretty' }
            : undefined,
      },
    }),

    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
