import { Router } from "express";
import { 
    getAllBlogs, 
    getBlogById, 
    postBlog 
} from "../controllers/blog.controller.js";

const router = Router();

router.route("").post(postBlog);
router.route("").get(getAllBlogs);
router.route("/:id").get(getBlogById);

export default router;