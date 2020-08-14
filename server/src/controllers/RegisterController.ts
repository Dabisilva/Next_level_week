import {Request, Response} from 'express'
import genereteToken from '../config/genereteToken';
import db from "../database/connection";


export default class RegisterController{
   
    async index(request: Request, response: Response){
        const totalUsers = await db('register').select('*')

        return response.json({totalUsers})
    }

    async create(request: Request, response: Response) {
        const {
            name,
            secund_name,
            email,
            password
        } = request.body;

        const trx = await db.transaction()
    
        try {
            const User = await trx('register').insert({
                name,
                secund_name,
                email,
                password
            })
    
            await trx.commit();
            return response.json({User, token : genereteToken(User)})
        }catch(err) {
            await trx.rollback()
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
       
    }
}