import { Request, Response, NextFunction } from 'express';
import { userList } from '../data/userData.js';

let getUserController: (a: Request, b: Response, c: NextFunction) => Promise<void>;

getUserController = async (req: Request, response: Response, next: NextFunction): Promise<void> => {
  console.log('getUserController runs');
  // we have also texted that "axios" (when used in web client) will config the CURRENT "HOST URL" AUTOMATICALLY (so you do not need to manually config to "localhost:5000")
  console.log(`request base url: ${req.protocol}, ${req.get('host')} ${req.baseUrl}`);
  response.status(200).json(userList);
};

export default getUserController;
