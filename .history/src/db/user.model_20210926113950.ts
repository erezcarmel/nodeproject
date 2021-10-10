import { Schema, model } from 'mongoose';
import { IBoard } from './board.model';
export interface IUser extends Document {
    name: string;
    password: string;
    boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

export const User = model<IUser>('User', UserSchema);
