import axios from 'axios'
import { RelevantQuoteInfo, YahooResponse } from '../types/YahooFinanceTypes'
import { currentDate } from '../helpers/logger'

async function getQuote(url: string): Promise<any> {
    const response = await axios.get<YahooResponse>(url)

    const relevantInfo: RelevantQuoteInfo = {
      logDate: currentDate(),
      averageDailyVolume3Month: response.data.quoteResponse.result[0].averageDailyVolume3Month,
      regularMarketPrice: response.data.quoteResponse.result[0].regularMarketPrice,
      symbol: response.data.quoteResponse.result[0].symbol,
    };
    return relevantInfo
}

export {
    getQuote
}