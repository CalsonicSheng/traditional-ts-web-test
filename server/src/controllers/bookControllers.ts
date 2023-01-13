import { Response, NextFunction } from 'express';
import { bookList } from '../data/bookData.js';
import CustomeRequest from '../interfaces/customRequestInterface';

async function getBookController(req: CustomeRequest, res: Response, next: NextFunction): Promise<void> {
  console.log('getBookController runs');
  const q1: string | undefined = req.q1;
  const q2: string | undefined = req.q2;
  console.log(`additional properties added on request from middleware ${q1}, ${q2}`);

  res.status(200).json(bookList);
}

export default getBookController;
