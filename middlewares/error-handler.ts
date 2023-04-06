import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'
import { currentDate } from '../helpers/currentDate'
import { insertToCSV } from '../helpers/writterCsv'

export const errorhandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {

    const dateWithMinutesAndSeconds: string = currentDate()

    if(err instanceof CustomError) {
        console.log({
            logDate: dateWithMinutesAndSeconds,
            status: err.statusCode,
            message: err.message
        })

        insertToCSV([
            dateWithMinutesAndSeconds,
            'ERROR',
            `{ status: ${err.statusCode.toString()}, message: ${err.message} }`,
        ])

        return res.status(err.statusCode).send({ errors: err.serializeErrors() })
    }

    console.log({
        logDate: dateWithMinutesAndSeconds,
        status: 400,
        message: err.message
    })

    insertToCSV([
        dateWithMinutesAndSeconds,
        'ERROR',
        `{ status: 400, message: ${err.message} }`
    ])

    res.status(400).send({
        errors: [
            { message: 'Something went wrong' }
        ]
    })
}