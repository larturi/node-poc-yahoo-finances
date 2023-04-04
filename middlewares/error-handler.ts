import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'
import { currentDate } from '../helpers/logger';

export const errorhandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if(err instanceof CustomError) {
        console.log({
            logDate: currentDate(),
            status: err.statusCode,
            message: err.message
        });

        return res.status(err.statusCode).send({ errors: err.serializeErrors() })
    }

    console.log({
        logDate: currentDate(),
        status: 400,
        message: err.message
    });

    res.status(400).send({
        errors: [
            { message: 'Something went wrong' }
        ]
    });
}