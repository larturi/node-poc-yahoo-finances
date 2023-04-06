import express, { Request, Response } from 'express'
import 'express-async-errors'

import { errorhandler } from './middlewares/error-handler'
import { quotesRouter } from './routes/quotes.route'
import { downloadLogRouter } from './routes/download-log.route'
import { downloadLog } from './services/download-log.service'

const app = express()

app.use(quotesRouter)
app.use(downloadLogRouter)

app.all('*', async (req: Request, res: Response) => {
    downloadLog(res)
})

app.use(errorhandler)

export { app }