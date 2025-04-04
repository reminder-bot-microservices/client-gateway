import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
