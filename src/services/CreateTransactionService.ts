import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, number }): Transaction {
    // TODO
    const transaction = this.transactionsRepository.create({
      number,
      title,
      value,
    });
    return transaction;
  }
}

export default CreateTransactionService;
