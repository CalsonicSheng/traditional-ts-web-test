import express from 'express';
import getBookController from '../controllers/bookControllers.js';
import bookRouteMiddleware1 from '../middlewares/bookMiddle.js';
const bookRouter = express.Router();
bookRouter.route('/').get([bookRouteMiddleware1], getBookController);
export default bookRouter;
