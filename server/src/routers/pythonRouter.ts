import express, { Router } from 'express';
import getPythonDataController from '../controllers/pythonController.js';

const pythonRouter: Router = express.Router();

pythonRouter.route('/').get(getPythonDataController);

export default pythonRouter;
