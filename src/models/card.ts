import { Schema, model } from 'mongoose';

export interface ICard extends Document {
    owner: string;
    content: string;
}

const CardSchema: Schema = new Schema({
    owner: { type: String, required: true },
    content: { type: String, required: true }
});

export default model<ICard>('Card', CardSchema);
