import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { currentDate } from '../helpers/currentDate';
import { insertToCSV } from '../helpers/writterCsv';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const slackUrl = process.env.SLACK_URL || '';

export const errorhandler = (
   err: Error,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const dateWithMinutesAndSeconds: string = currentDate();

   if (err instanceof CustomError) {
      console.log({
         logDate: dateWithMinutesAndSeconds,
         status: err.statusCode,
         message: err.message,
      });

      insertToCSV([
         dateWithMinutesAndSeconds,
         'ERROR',
         `{ status: ${err.statusCode.toString()}, message: ${err.message} }`,
      ]);

      axios.post(slackUrl, {
         text: `Error en API Yahoo Finances. ${req.body.text}`,
      });

      return res.status(err.statusCode).send({ errors: err.serializeErrors() });
   } else {
      console.log({
         logDate: dateWithMinutesAndSeconds,
         status: 400,
         message: err.message,
      });

      insertToCSV([
         dateWithMinutesAndSeconds,
         'ERROR',
         `{ status: 400, message: ${err.message} }`,
      ]);

      if (err.message === 'Request failed with status code 401') {
         axios.post(slackUrl, {
            text: `Error en API Yahoo Finances. ${err.message}. ${dateWithMinutesAndSeconds}`,
         });
      }
   }

   res.status(400).send({
      errors: [{ message: 'Something went wrong' }],
   });
};
