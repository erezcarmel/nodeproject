import { Schema, model, ObjectId } from 'mongoose';
export interface ICard extends Document {
    boardId: ObjectId,
    content: string;
}

const CardSchema: Schema = new Schema({
    boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
    content: { type: String, required: true }
});

export const Card = model<ICard>('Card', CardSchema);
