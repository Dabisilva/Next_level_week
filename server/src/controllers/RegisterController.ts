import { Request, Response } from 'express'
import genereteToken from '../config/genereteToken';
import db from "../database/connection";
import bcrypt from 'bcrypt'

import {convertHourToMinutes} from "../utils/convertHoursToMinutes";

interface ScheduleItem {
    week_day: string,
    from: string,
    to: string
}

export default class RegisterController {

    async index(request: Request, response: Response) {
        const totalUsers = await db('register').select('*')

        return response.json({ totalUsers })
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
            const user: number = await trx('register').insert({
                name,
                secund_name,
                email,
                password: bcrypt.hashSync(password, 10)
            })

            await trx.commit();
            return response.json({ user, token: genereteToken(user)})
        } catch (err) {
            await trx.rollback()
            return response.status(400).json({
                error: 'Unexpected error while creating new user'
            })
        }

    }

    async update(request: Request, response: Response) {

        const { id } = request.params;
        const {
            name,
            secund_name,
            email,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        const trx = await db.transaction()

        try {
            const user = await trx('register')
                .where('id', id)
                .update({
                    name,
                    secund_name,
                    email,
                    avatar
                })

            const insertedUsersId = await trx('users')
                .where('id', user)
                .update({
                    name,
                    whatsapp,
                    bio,
                    avatar
                })
            
            const user_id = insertedUsersId

            const insertedClassesId = await trx('classes')
                .where('id', user_id)
                .update({
                    subject,
                    cost,
                })

            const class_id = insertedClassesId

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                };
            })
            console.log(classSchedule)
            // await trx('class_schedule')
            //     .where('class_id', class_id,)
            //     .update(classSchedule)

            await trx.commit();
            return response.status(201).json({
                message: 'dados editados'
            })
        } catch (err) {
            await trx.rollback()
            return response.status(400).json({
                error: 'Unexpected error while updating'
            })
        }
    }
   
}