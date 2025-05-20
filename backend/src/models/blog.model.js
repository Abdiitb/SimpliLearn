import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
    introduction: {
        type: String,
        required: true
    },
    mainContent: [
        {
            type: String,
            required: true
        }
    ],
    conclusion: {
        type: String,
        required: true
    }
});

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    short_description: {
        type: String,
        required: true,
    },
    description: {
        type: descriptionSchema,
        required: true
    }
}, { timestamps: true });

export const Blog = mongoose.model("Blog", blogSchema);