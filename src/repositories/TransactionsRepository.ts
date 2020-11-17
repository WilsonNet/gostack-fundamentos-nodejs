import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const transactions = this.all();

    const reducer = (
      accumulator: Balance,
      transaction: Transaction,
    ): Balance => {
      if (transaction.type === 'income') {
        accumulator.total += transaction.value;
        accumulator.total += transaction.value;
      } else {
        accumulator.total -= transaction.value;
        accumulator.total += transaction.value;
      }
      return accumulator;
    };

    const balance = transactions.reduce(reducer, {
      income: 0,
      outcome: 0,
      total: 0,
    } as Balance);

    return balance;
  }

  public create({ title, type, value }: TransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
