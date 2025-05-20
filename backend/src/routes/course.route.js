import { Router } from "express";
import { 
    getAllCourses, 
    getCourseById, 
    postCourse 
} from "../controllers/course.controller.js";


const router = Router();

router.route("").post(postCourse);
router.route("").get(getAllCourses);
router.route("/:id").get(getCourseById);

export default router;