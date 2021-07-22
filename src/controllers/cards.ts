import { Request, Response } from 'express';
import { Card } from '../db/card.model';

export const get = async (req:Request, res:Response) => {
    try {
        if (req.method == 'GET') {
            const card = await Card.findById(req.params.id);
            return res.status(200).json(card);
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};

export const create = (req:Request, res:Response) => {
    try {
        if (req.method == 'POST') {
            const card = new Card({
                boardId: req.body.boardId,
                content: req.body.content
            });
            card.save((err, card) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json(card);
            });
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};

export const update = async (req:Request, res:Response) => {
    try {
        if (req.method == 'PUT') {
            const result = await Card.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { upsert: true }
            );
            return res.status(200).json(result);
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};

export const remove = async (req:Request, res:Response) => {
    try {
        if (req.method == 'DELETE') {
            const result = await Card.deleteOne({ _id: req.params.id });
            return res.status(200).json(result);
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};