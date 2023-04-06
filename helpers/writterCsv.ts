import fs from 'fs'

function insertToCSV(row: string[]): void {
  const data = `${row.join(';')}\n`

  const filePath = 'log.csv'

  fs.appendFile(filePath, data, (err) => {
    if (err) throw err
  })
}

export {
    insertToCSV
}