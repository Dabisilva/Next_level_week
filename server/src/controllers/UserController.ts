import { Request, Response } from 'express'
import genereteToken from '../config/genereteToken';
import db from "../database/connection";

export default class UserController {

    // async index(request: Request, response: Response){
    //     const totalUsers = await db('register').select('*')

    //     return response.json({totalUsers})
    // }

    async create(request: Request, response: Response) {
        const {
            email,
            password
        } = request.body;

        const user = await db('register')
            .select('*')
            .where('password', password)
            .where('email', email)
            .first()
       
        if (!user) {
            return response.status(400).json({
                error: `Erro`
            })
        }
        return response.json({ user, token: genereteToken(user.id) });
    }

}