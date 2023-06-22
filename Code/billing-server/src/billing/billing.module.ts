import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { TransactionRepository } from 'src/transaction/transaction.repository';
import { Processor } from 'src/processor/processor';

@Module({
  controllers: [BillingController],
  providers: [BillingService, TransactionRepository, Processor],
})
export class BillingModule {}
