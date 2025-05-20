import { Router } from "express";
import { saveContactMessage } from "../controllers/contact.controller.js";

const router = Router();

router.route("").post(saveContactMessage);

export default router;