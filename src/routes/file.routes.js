import { Router } from "express";
import { listFiles, getFileById } from "../controllers/file.controller";

const router = Router();

router.get("/", listFiles);
router.get("/:id", getFileById);

export default router;

