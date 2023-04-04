import express, { Request, Response } from 'express'
import { getYahooRelevantInfo } from './services/yahoo.service';

const app = express()

app.get("/quote", async (req: Request, res: Response) => {
  const baseUrl = 'https://query1.finance.yahoo.com/v7/finance/quote'
  const symbols = req.query.symbols as string
  const modules = req.query.modules as string

  const url: string = `${baseUrl}?symbols=${symbols}&modules=${modules}`
  const response = await getYahooRelevantInfo(url)

  console.log(response)

  res.send(response)
});

app.listen(3014, () => {
  console.log("Server listening on port 3014")
});