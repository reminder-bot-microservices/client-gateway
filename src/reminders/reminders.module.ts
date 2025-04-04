import { Module } from '@nestjs/common';
import { RemindersController } from './reminders.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [RemindersController],
  imports: [NatsModule],
  providers: [],
})
export class RemindersModule {}
