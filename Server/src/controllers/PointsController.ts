import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    async show (req: Request, res: Response){
        const { id } = req.params

        const point = await knex('points').where('id', id).first()

        if (!point){
            return res.status(400).json({ menssage: 'Ponit not found.'})
        }

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title')

        return res.json({point, items})
    }

    async create (req: Request, res: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items,
        } = req.body
    
        const trx = await knex.transaction()

        let itemVerify;

        items.map(async (item: number) => {
        itemVerify = await knex("items").select("*").where("id", item);
        console.log(itemVerify.length)
        if (itemVerify.length == 0 || itemVerify.length < 0) {
            return res.json({
            message: `O item de número ${item} não foi encontrado`,
            });
        }
        });
        
        try{
            const point = {
                image: 'image-fake',
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf
            }
        
            const insertedIds = await trx('points').insert(point)
            
            const point_id = insertedIds[0]
        
            const pointItems = items.map((item_id: number) => {
                return {
                    item_id,
                    point_id
                }
            })
            await trx('point_items').insert(pointItems)
            await trx.commit()
            return res.json({
                id: point_id, 
                ...point,
            })
        }catch(err) {
            console.log(err)
        }
    }
}
export default PointsController