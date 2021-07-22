import { Schema, model, ObjectId } from 'mongoose';
import { ICard } from './card.model';
export interface IBoard extends Document {
    owner: ObjectId;
}

const BoardSchema: Schema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

export const Board = model<IBoard>('Board', BoardSchema);
