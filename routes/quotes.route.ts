import express, { Request, Response } from 'express'
import { getYahooRelevantInfo } from '../services/yahoo.service'
import { baseUrl } from '../config/constants'
import { validateRequest } from '../middlewares/validate-request'
import { insertToCSV } from '../helpers/writterCsv'
import { YahooRelevantInfo } from '../types/YahooFinanceTypes'

const router = express.Router()

router.get(
    '/quote', 
    validateRequest,
    async (req: Request, res: Response) => {
        const symbols = req.query.symbols || 'TECO2.BA'
        const modules = req.query.modules || 'price'
      
        const url: string = `${baseUrl}?symbols=${symbols}&modules=${modules}`
        const response: YahooRelevantInfo = await getYahooRelevantInfo(url)
      
        console.log(response)

        insertToCSV([
            response.logDate,
            'OK',
            `{ symbol: ${response.symbol}, regularMarketPrice: ${response.regularMarketPrice.toString()}, averageDailyVolume3Month: ${response.averageDailyVolume3Month.toString()} }`,
        ])
      
        res.send(response)
})

export { router as quotesRouter }