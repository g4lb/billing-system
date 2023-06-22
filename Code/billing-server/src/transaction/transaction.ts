export enum TransactionDirection {
  Credit = 'credit',
  Debit = 'debit',
}

export class Transaction {
  transaction_id: string;
  success: boolean;
  dst_bank_account: string;
  amount: number;
  direction: TransactionDirection;
  created_at: Date;

  constructor(
    transactionId: string,
    success: boolean,
    dstBankAccount: string,
    amount: number,
    direction: TransactionDirection,
    createdAt: Date,
  ) {
    this.transaction_id = transactionId;
    this.success = success;
    this.dst_bank_account = dstBankAccount;
    this.amount = amount;
    this.direction = direction;
    this.created_at = createdAt;
  }
}
