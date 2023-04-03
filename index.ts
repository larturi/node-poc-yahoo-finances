import express from 'express'
import axios from 'axios'
import { getQuote } from './services/yahoo.service';

const app = express()

app.get("/quote", async (req: express.Request, res: express.Response) => {
  const baseUrl = 'https://query1.finance.yahoo.com/v7/finance/quote'
  const symbols = req.query.symbols as string
  const modules = req.query.modules as string

  const url: string = `${baseUrl}?symbols=${symbols}&modules=${modules}`
  const response = await getQuote(url)

  console.log(response)

  res.send(response)
});

app.listen(3000, () => {
  console.log("Server listening on port 3000")
});