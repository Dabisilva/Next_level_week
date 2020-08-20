import { Request, Response } from 'express'

import db from "../database/connection";

export default class FavoriteController {
    async index(request: Request, response: Response) {
        const { id } = request.params

        try {
            const favorites = await db('favorite')
                .where('user_id', id)
                .select('*')

            response.json({ favorites })
        } catch (err) {
            response.status(401).json({
                message: 'erro'
            })
        }
    }

    async create(request: Request, response: Response) {
        const { id } = request.params

        const {
            favorites,
            teacher_id
        } = request.body

        console.log(id, favorites, teacher_id)
        try {
            await db('favorite')
                .insert({
                    favorites,
                    user_id: id,
                    teacher_id
                })
            response.status(201).json({
                message: 'favorited sucessfull'
            })
        } catch (err) {
            response.status(401).json({
                error: 'erro'
            })
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        try {
            await db('favorite')
                .where('user_id', id)
                .delete()
                
            response.status(201).send()
        } catch (err) {
            response.status(401).json({
                error: 'erro'
            })
        }
    }
}