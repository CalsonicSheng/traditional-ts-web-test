import { Response, NextFunction } from 'express';
import CustomeRequest from '../interfaces/customRequestInterface';

function bookRouteMiddleware1(req: CustomeRequest, res: Response, next: NextFunction): void {
  console.log('bookRouteMiddleware1 run');
  req.q1 = 'q1-value';
  req.q2 = 'q2-value';
  next();
}

export default bookRouteMiddleware1;
