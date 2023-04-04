import express from 'express'
import { getQuote } from './services/yahoo.service';
import { currentDate } from './helpers/logger';

const app = express()

app.get("/quote", async (req: express.Request, res: express.Response) => {
  const baseUrl = 'https://query1.finance.yahoo.com/v7/finance/quote'
  const symbols = req.query.symbols as string
  const modules = req.query.modules as string

  const url: string = `${baseUrl}?symbols=${symbols}&modules=${modules}`
  const response = await getQuote(url)

  console.log(response)
  console.log(currentDate())

  res.send(response)
});

app.listen(3014, () => {
  console.log("Server listening on port 3014")
});