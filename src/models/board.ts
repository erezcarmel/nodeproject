import { Schema, model } from 'mongoose';
import { ICard } from './card';

export interface IBoard extends Document {
    owner: string;
    cards: Array<ICard>;
}

const BoardSchema: Schema = new Schema({
    owner: { type: String, required: true },
    cards: { type: Array, required: true }
});

export default model<IBoard>('Board', BoardSchema);
