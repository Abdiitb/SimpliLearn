import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    paid: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Course = mongoose.model("Course", courseSchema);