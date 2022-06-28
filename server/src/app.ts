import { join } from 'path';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routes';
import { notFound, serverError } from './controllers';

dotenv.config();

const { env: { NODE_ENV, PORT } } = process;

const app: Application = express();
app.disable('x-powered-by');
app.set('port', PORT || 5000);

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  compression(),
  cookieParser(),
  cors(),
]);

app.use('/api/v1', router);

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
  app.get('/', (req: Request, res: Response) => res.json({ message: 'Server Is Running' }));
} else {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html')));
}

app.use([notFound, serverError]);

export default app;
