import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Blog } from "../models/blog.model.js";

const postBlog = asyncHandler(async (req, res) => {
    const { title, short_description, description } = req.body;

    if(
        [title, short_description, description].some((item) => !item)
    ){
        throw new ApiError(
            400,
            "Missing required fields"
        );
    }

    const blog = await Blog.create({
        title,
        short_description,
        description
    })

    if(!blog){
        throw new ApiError(
            500,
            "Problem in saving blog to database"
        );
    }

    return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog saved successfully"));
});

const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});

    if(!blogs){
        throw new ApiError(
            500,
            "Problem in fetching blogs from database"
        );
    }

    return res
    .status(200)
    .json(new ApiResponse(200, blogs, "Blogs fetched successfully"));
});

const getBlogById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if(!blog){
        throw new ApiError(
            500,
            "Problem in fetching blog from database"
        );
    }

    return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog fetched successfully"));
});

export { 
    postBlog,
    getAllBlogs,
    getBlogById
};
