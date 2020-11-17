import { Router } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();
//
const transactionsRepository = new TransactionsRepository();

// transactionRouter.get('/transactions', (request, response) => {
//   try {
//     // TODO
//   } catch (err) {
//     return response.status(400).json({ error: err.message });
//   }
// });

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const { title, value, type } = request.body;

    const createTransactionService = new CreateTransactionService(
      transactionsRepository,
    );

    const transaction = createTransactionService.execute({
      title,
      value,
      type,
    });

    return response.status(200).json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
