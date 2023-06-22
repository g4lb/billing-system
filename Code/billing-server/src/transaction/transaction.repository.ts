import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction';

@Injectable()
export class TransactionRepository {
  private transactions: Map<string, Transaction> = new Map<
    string,
    Transaction
  >();

  create(transaction: Transaction) {
    this.transactions.set(transaction.transaction_id, transaction);
  }
}
