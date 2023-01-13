import express from 'express';
import getUserController from '../controllers/userControllers.js';
const userRouter = express.Router();
userRouter.route('/').get(getUserController);
export default userRouter;
