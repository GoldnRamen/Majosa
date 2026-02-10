import express from "express";
import { registerUser, loginUser, getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController.js";
import { authenticateUser, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// No middleware needed - public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin-only routes - require authentication + admin role
router.get("/", authenticateUser, isAdmin, getAllUsers);
router.get("/:id", authenticateUser, isAdmin, getUserById);
router.post("/", authenticateUser, isAdmin, createUser);
router.put("/:id", authenticateUser, isAdmin, updateUser);
router.delete("/:id", authenticateUser, isAdmin, deleteUser);

export default router;