import { Request, Response } from 'express';
import { User } from '../db';

export const get = async (req:Request, res:Response) => {
    try {
        if (req.method == 'GET') {
            let user = await User.findById(req.params.id);
            let user = await User.findById(req.params.id);
            return res.status(200).json(user);
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};

export const create = (req:Request, res:Response) => {
    try {
        if (req.method == 'POST') {
            const user = new User({
                name: req.body.name,
                password: req.body.password,
                boards: []
            });
            user.save((err, user) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json(user);
            });
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};

export const update = async (req:Request, res:Response) => {
    try {
        if (req.method == 'PUT') {
            const result = await User.findOneAndUpdate(
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
            const result = await User.deleteOne({ _id: req.params.id });
            return res.status(200).json(result);
        }
    } catch (error) {
        res.status(error.status || 500);
    }
};