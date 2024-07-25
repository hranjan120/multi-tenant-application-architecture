import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoModel = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user_datas', required: true },
    toDoTitle: { type: String, required: true },
    toDoDesc: { type: String, required: true },
    toDoStatus: { type: String, enum: ['PENDING', 'COMPLETED'], default: 'PENDING' },
}, {
    timestamps: true,
});

export default TodoModel;