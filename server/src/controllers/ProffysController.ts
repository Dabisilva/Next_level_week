import {Request, Response} from 'express'

import db from "../database/connection";

export default class ProffysController{
    async index(request: Request, response: Response){

        const proffysTotal = await db('classes').count('* as total')
        
        const proffys = await db('classes').select('*')

        const { total } = proffysTotal[0]
        return response.json({ total, proffys })
    }
    
    async create(request: Request, response: Response) {

       
    }
}