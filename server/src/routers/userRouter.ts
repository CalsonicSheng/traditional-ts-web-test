import express, { Router } from 'express';
import getUserController from '../controllers/userControllers.js';

const userRouter: Router = express.Router();

userRouter.route('/').get(getUserController);

export default userRouter;
