import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserModel = new Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPwd: { type: String, required: true },
    isRootUser: { type: Boolean, default: false },
    userStatus: { type: String, enum: ['ACTIVE', 'IN-ACTIVE'], default: 'ACTIVE' },
}, {
    timestamps: true,
});

export default UserModel;