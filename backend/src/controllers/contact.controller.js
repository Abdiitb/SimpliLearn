import { Contact } from "../models/contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const saveContactMessage = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    if(
        [name, email, subject, message].some((item) => !item)
    ){
        throw new ApiError(
            400,
            "Missing required fields"
        );
    }

    const contact = await Contact.create({
        name,
        email,
        subject,
        message
    })

    if(!contact){
        throw new ApiError(
            500,
            "Problem in saving message to database"
        );
    }

    return res
    .status(200)
    .json(new ApiResponse(200, contact, "Message sent successfully"));
});

export { saveContactMessage };