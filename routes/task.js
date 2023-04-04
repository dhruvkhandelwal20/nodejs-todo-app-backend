import express from "express";
import {
  deleteTask,
  getMyTasks,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/myTasks", isAuthenticated, getMyTasks);

router
  .route("/:_id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
