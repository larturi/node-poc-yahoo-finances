import * as fs from 'fs'
import { Response } from 'express'
import { currentDate } from '../helpers/currentDate'

function downloadLog(res: Response) {

  const filePath = './logs.csv'

  const dateWithSeconds = currentDate()
  const dateNumbersOnly = dateWithSeconds.replace(/\D/g, "");
  const fileDownloadName = `${dateNumbersOnly}.logs.csv`

  res.setHeader("Content-disposition", "attachment; filename=" + fileDownloadName)
  res.setHeader("Content-type", "text/csv")

  const fileStream = fs.createReadStream(filePath)
  fileStream.pipe(res)
}

export {
  downloadLog
}