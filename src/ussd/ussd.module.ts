import { Module } from '@nestjs/common';
import { UssdService } from './ussd.service';

@Module({
  providers: [UssdService],
})
export class UssdModule {}
