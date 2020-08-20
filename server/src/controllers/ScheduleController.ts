import { Request, Response } from 'express'
import db from "../database/connection";


export default class UserController {
    async index(request: Request, response: Response) {

        const { id } = request.params;


        try {
            const schedule = await db('class_schedule')
                .where('class_id', id)
                .select('*')

            response.json({schedule})
        }catch(err){
            return response.status(400).json({
                erro: 'any schedule founded'
            })
        }
    }
    async delete(request: Request, response: Response) {
        const {id} = request.params
        
        await db('class_schedule')
            .where('id', id)
            .select()
            .first()
            .delete()
    }

}