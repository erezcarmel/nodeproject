import { Router } from 'express';
import Board, { IBoard } from '../models/board';

module.exports.createBoard = (req:Request, res:Response) => {
    // if (req.method == 'POST') {
    //     const board = new Board({
    //         owner: req.body.name,
    //         boards: []
    //     });
    //     board.save( (err, board) => {
    //         if(err) return res.status(500).send(err);
    //         return res.status(200).json(user);
    //     });
    // }
};