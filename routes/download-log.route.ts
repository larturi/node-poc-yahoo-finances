import express, { Request, Response } from 'express'
import { validateRequest } from '../middlewares/validate-request'
import { downloadLog } from '../services/download-log.service'

const router = express.Router()

router.get(
    '/log', 
    validateRequest,
    async (req: Request, res: Response) => {
        downloadLog(res)
    })

export { router as downloadLogRouter }