import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const balance = this.transactionsRepository.getBalance();

    const { total } = balance;

    if (type === 'outcome' && value > total) {
      throw new Error('Insufficient funds');
    }

    const transaction = this.transactionsRepository.create({
      type,
      title,
      value,
    });
    return transaction;
  }
}

export default CreateTransactionService;
