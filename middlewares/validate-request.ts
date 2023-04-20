import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/request-validation-error'

export const validateRequest = (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {

            const slackUrl = process.env.SLACK_URL || '';

            console.log(slackUrl);

            throw new RequestValidationError(errors.array())
        }

        next()
}

