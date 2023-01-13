import express from 'express';
import getPythonDataController from '../controllers/pythonController.js';
const pythonRouter = express.Router();
pythonRouter.route('/').get(getPythonDataController);
export default pythonRouter;
