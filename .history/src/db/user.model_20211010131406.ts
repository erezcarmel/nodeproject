import { Schema, model } from 'mongoose';
import { IBoard } from './board.model';
export interface IUser extends Document {
    name: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    password: { type: String, required: true },
    // boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
});

export const User = model<IUser>('User', UserSchema);
