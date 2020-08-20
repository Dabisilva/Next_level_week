import { Request, Response } from 'express'
import genereteToken from '../config/genereteToken';
import db from "../database/connection";
import bcrypt from 'bcrypt'
import { convertHourToMinutes } from '../utils/convertHoursToMinutes';


export default class UserController {
    async index(request: Request, response: Response) {

        const { id } = request.params;


        try {
            const schedule = await db('class_schedule')
                .where('class_id', id)
                .select('*')

            response.json(schedule)
        }catch(err){
            return response.status(400).json({
                erro: 'any schedule founded'
            })
        }
    }
    async create(request: Request, response: Response) {
        const {
            email,
            password
        } = request.body;

        const user = await db('register')
            .select('*')
            .where('email', email)
            .first()

        if (!user) {
            return response.status(400).json({
                error: `Erro`
            })
        }

        const passwordRes = await bcrypt.compare(password, user.password)

        if (!passwordRes) {
            return response.status(401).json({ error: 'Usuário ou senha incorretos' });
        }

        return response.json({ user, token: genereteToken(user.id) });
    }

}