import express, { Request, Response } from 'express'
import 'express-async-errors'

import { errorhandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'
import { quotesRouter } from './routes/quotes.route'

const app = express();

app.use(quotesRouter);

app.all('*', async (req: Request, res: Response) => {
    throw new NotFoundError()
});

app.use(errorhandler);

export { app }