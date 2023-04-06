import axios from 'axios'
import { YahooRelevantInfo, YahooResponse } from '../types/YahooFinanceTypes'
import { currentDate } from '../helpers/currentDate'

async function getYahooRelevantInfo(url: string): Promise<any> {

  const response = await axios.get<YahooResponse>(url)
  const data = response.data.quoteResponse.result[0]

  const relevantInfo: YahooRelevantInfo = {
    logDate: currentDate(),
    averageDailyVolume3Month: data.averageDailyVolume3Month,
    regularMarketPrice: data.regularMarketPrice,
    symbol: data.symbol,
  }
  
  return relevantInfo
}

export {
  getYahooRelevantInfo
}