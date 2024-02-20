import { Module } from '@nestjs/common';
import { UssdController } from './ussd/ussd.controller';
import { UssdService } from './ussd/ussd.service';

@Module({
  imports: [],
  controllers: [UssdController],
  providers: [UssdService],
})
export class AppModule {}
