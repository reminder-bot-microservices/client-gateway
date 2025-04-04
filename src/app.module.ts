import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats.module';
import { RemindersController } from './reminders/reminders.controller';
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [NatsModule, RemindersModule],
  controllers: [RemindersController],
  providers: [],
})
export class AppModule {}
