import { Request, Response, NextFunction } from 'express';

let getPythonDataController: (a: Request, b: Response, c: NextFunction) => Promise<void>;

getPythonDataController = async (req: Request, response: Response, next: NextFunction): Promise<void> => {
  console.log('getPythonDataController runs');
};

export default getPythonDataController;
