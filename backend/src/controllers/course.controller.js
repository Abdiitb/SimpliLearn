import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Course } from "../models/course.model.js";

const postCourse = asyncHandler(async (req, res) => {
    const { title, paid, price, short_description, description } = req.body;

    if(
        [title, paid, price, short_description, description].some((item) => !item)
    ){
        throw new ApiError(
            400,
            "Missing required fields"
        );
    }

    const course = await Course.create({
        title,
        paid,
        price,
        short_description,
        description
    })

    if(!course){
        throw new ApiError(
            500,
            "Problem in saving course to database"
        );
    }

    return res
    .status(201)
    .json(new ApiResponse(201, course, "Course created successfully"));
})

const getAllCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});

    if(!courses){
        throw new ApiError(
            500,
            "Problem in fetching courses from database"
        );
    }

    return res
    .status(200)
    .json(new ApiResponse(200, courses, "Courses fetched successfully"));
})

const getCourseById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const course = await Course.findById(id);

    if(!course){
        throw new ApiError(
            500,
            "Problem in fetching course from database"
        );
    }

    return res
    .status(200)
    .json(new ApiResponse(200, course, "Course fetched successfully"));
});

export { 
    postCourse,
    getAllCourses,
    getCourseById
};