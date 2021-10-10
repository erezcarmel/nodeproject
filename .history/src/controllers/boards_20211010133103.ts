import { Types } from 'mongoose';
import { Request, Response } from 'express';
import { Board } from '../db/board.model';

export const get = async (req:Request, res:Response) => {
    try {
        if (req.method == 'GET') {
            let board = await Board.aggregate([
                { $match: { _id: Types.ObjectId(req.params.id) } },
                { $lookup: {
                    from: "cards",
                    localField: "_id",
                    foreignField: "board",
                    as: "cards"
                }
            }]);
            return res.status(200).json(board);
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};

export const create = (req:Request, res:Response) => {
    try {
        if (req.method == 'POST') {
            const board = new Board({
                owner: req.body.owner
            });
            board.save((err, board) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json(board);
            });
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};

export const update = async (req:Request, res:Response) => {
    try {
        if (req.method == 'PUT') {
            const result = await Board.findOneAndUpdate(
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
            const result = await Board.deleteOne({ _id: req.params.id });
            return res.status(200).json(result);
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};