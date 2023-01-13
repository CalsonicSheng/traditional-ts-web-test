import express from 'express';
import getUserController from '../controllers/userControllers.js';
const personRouter = express.Router();
personRouter.route('/').get(getUserController);
export default personRouter;
