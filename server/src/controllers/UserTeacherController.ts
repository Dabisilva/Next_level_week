import { Request, Response } from 'express'

import db from "../database/connection";
import { convertHourToMinutes } from '../utils/convertHoursToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class UserTeacherController {
    async index(request: Request, response: Response) {

        try {
            const { id } = request.params

            const proffyDates = await db('users')
                .where('teacher_id', id)

            const proffy_id = proffyDates[0].id

            const proffy = await db('classes')
                .where('user_id', proffy_id)
                .join('users', 'classes.user_id', '=', 'users.id')
                .select('*')
                .first()

            return response.json({ proffy })
        } catch (err) {
            return response.status(400).json({
                error: 'Don`t exist register'
            })
        }
    }

    async create(request: Request, response: Response) {
        const { id } = request.params

        const { schedule } = request.body

        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to)
            };
        })

        const trx = await db.transaction()
        try {
            await trx('class_schedule')
                .where('class_id', id)
                .insert(classSchedule)

            await trx.commit()
            response.status(201).send({classSchedule})
        } catch (err) {
            await trx.rollback()
            response.status(401).json({
                erro: 'somthing is wrong'
            })
        }

    }
}