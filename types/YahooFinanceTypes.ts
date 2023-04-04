export interface YahooResponse {
  quoteResponse: QuoteResponse;
}

export interface QuoteResponse {
  result: Result[];
  error:  null;
}

export interface YahooRelevantInfo {
  logDate:                  string;
  averageDailyVolume3Month: number;
  regularMarketPrice:       number;
  symbol:                   string;

}

interface Result {
  language:                          string;
  region:                            string;
  quoteType:                         string;
  typeDisp:                          string;
  quoteSourceName:                   string;
  triggerable:                       boolean;
  customPriceAlertConfidence:        string;
  exchange:                          string;
  shortName:                         string;
  longName:                          string;
  messageBoardId:                    string;
  exchangeTimezoneName:              string;
  exchangeTimezoneShortName:         string;
  gmtOffSetMilliseconds:             number;
  market:                            string;
  marketState:                       string;
  esgPopulated:                      boolean;
  regularMarketChangePercent:        number;
  currency:                          string;
  regularMarketPrice:                number;
  firstTradeDateMilliseconds:        number;
  priceHint:                         number;
  regularMarketDayRange:             string;
  regularMarketDayLow:               number;
  regularMarketVolume:               number;
  regularMarketPreviousClose:        number;
  bid:                               number;
  ask:                               number;
  bidSize:                           number;
  askSize:                           number;
  fiftyTwoWeekHighChangePercent:     number;
  fiftyTwoWeekLow:                   number;
  fiftyTwoWeekHigh:                  number;
  earningsTimestamp:                 number;
  earningsTimestampStart:            number;
  earningsTimestampEnd:              number;
  trailingAnnualDividendRate:        number;
  trailingAnnualDividendYield:       number;
  epsTrailingTwelveMonths:           number;
  epsForward:                        number;
  epsCurrentYear:                    number;
  priceEpsCurrentYear:               number;
  sharesOutstanding:                 number;
  bookValue:                         number;
  fiftyDayAverage:                   number;
  fiftyDayAverageChange:             number;
  fiftyDayAverageChangePercent:      number;
  twoHundredDayAverage:              number;
  twoHundredDayAverageChange:        number;
  twoHundredDayAverageChangePercent: number;
  marketCap:                         number;
  forwardPE:                         number;
  priceToBook:                       number;
  sourceInterval:                    number;
  exchangeDataDelayedBy:             number;
  averageAnalystRating:              string;
  tradeable:                         boolean;
  cryptoTradeable:                   boolean;
  regularMarketChange:               number;
  regularMarketTime:                 number;
  regularMarketDayHigh:              number;
  fullExchangeName:                  string;
  financialCurrency:                 string;
  regularMarketOpen:                 number;
  averageDailyVolume3Month:          number;
  averageDailyVolume10Day:           number;
  fiftyTwoWeekLowChange:             number;
  fiftyTwoWeekLowChangePercent:      number;
  fiftyTwoWeekRange:                 string;
  fiftyTwoWeekHighChange:            number;
  symbol:                            string;
}
