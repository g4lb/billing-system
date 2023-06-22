import { Module } from '@nestjs/common';
import { BillingController } from './billing/billing.controller';
import { BillingService } from './billing/billing.service';
import { TransactionRepository } from './transaction/transaction.repository';
import { Processor } from './processor/processor';

@Module({
  controllers: [BillingController],
  providers: [BillingService, TransactionRepository, Processor],
})
export class AppModule {}
