import express, { json } from 'express';
import helmet from 'helmet';
import mainRouter from './routes/main';
import handle404Error from './middlewares/wrong-url-handler';

const app = express();

app.use(json());
app.use(helmet());
app.disable('x-powered-by');

app.use('/v1/api', mainRouter);

app.all('/*', handle404Error);

export default app;
