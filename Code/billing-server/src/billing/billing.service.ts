import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PerformAdvanceDto } from './dto/perform-advance.dto';
import { Processor } from 'src/processor/processor';
import { TransactionRepository } from 'src/transaction/transaction.repository';
import { Transaction, TransactionDirection } from 'src/transaction/transaction';

@Injectable()
export class BillingService {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly processor: Processor,
  ) {}

  performAdvance(performAdvanceDto: PerformAdvanceDto) {
    const { dst_bank_account, amount } = performAdvanceDto;

    const transactionId = uuidv4();
    const direction = TransactionDirection.Credit;

    // Perform credit transaction using the Processor API
    const success = this.processor.performTransaction(
      dst_bank_account,
      amount,
      direction,
    );

    // Store transaction details in the repository
    const transaction = new Transaction(
      transactionId,
      success,
      dst_bank_account,
      amount,
      direction,
      new Date(),
    );
    this.transactionRepository.create(transaction);

    return { transaction_id: transactionId };
  }
}
