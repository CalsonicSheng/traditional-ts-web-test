import express, { Express, NextFunction, Response, Request } from 'express';
import path from 'path';
import bookRouter from './routers/bookRouter.js';
import pythonRouter from './routers/pythonRouter.js';
import userRouter from './routers/userRouter.js';

const __dirname: string = path.resolve(); // this "__dirname" gives the absolute path string to the top project folder
const app: Express = express();

// global middleware ---------------------------------------------------------------------------------------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/client/dist')); // this auto sets the "path prefix" for browser to auto fetch subsequent associated files in target html file

// page routes ---------------------------------------------------------------------------------------------------------------------------------------------

// the reason we have page route is because we dont have SPA frontend solution but using traditional web dev approach (each navigation must fetch a new corresponding HTML file)
// these APIs are sent directly from the frontend browser app itself through <a> navigation to get corresponding HTML file
// "sendFile" method needs full absolute path
app.get('/', function (req: Request, res: Response, next: NextFunction): void {
  res.status(200).sendFile(__dirname + '/client/public/home.html');
});

app.get('/next', function (req: Request, res: Response, next: NextFunction): void {
  res.status(200).sendFile(__dirname + '/client/public/next.html');
});

// API routes ---------------------------------------------------------------------------------------------------------------------------------------------

// these API are sent through AJAX (not from browser) to get corresponding data (from different categories)
// each set of controller and data/model is correspondingly aligned with each api route
app.use('/user', userRouter);

app.use('/book', bookRouter);

// we will add one more here for getting data from python files

app.use('/python', pythonRouter);

// 404 not found ---------------------------------------------------------------------------------------------------------------------------------------------
app.use((req: Request, res: Response, next: NextFunction): void => {
  console.log('404 reached');
  res.status(404).json('no response data fetched, axios error occur');
});

////////////////////////////////////////////////////////////////////////////////////////////////

// recall again, IP address (each device on internet has) directs the communication/transmission to the right machine, but it is the assigned ported number gets it to right application
// this is true for both request and response between two devices
// this "app.listen" will make your express backend app run on the machine / pc where it is currently hosted (in development, it is your local home or work pc)
// you need to realize that each backend application eventually all running on some physical computer (either locally on development PC or remotely on cloud provider's PC)
// "localhost" reference AUTOMATICALLY used/indicated if backend application is directly hosted/ran on the development PC (very important)
app.listen(5000, function () {
  console.log('listening on port 5000');
});
