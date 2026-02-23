import express from "express";
import { registerUser, loginUser, getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController.js";
import { authenticateUser, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// No middleware needed - public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin-only routes - require authentication + admin role
router.get("/all", authenticateUser, isAdmin, getAllUsers);
router.get("/:id", authenticateUser, isAdmin, getUserById);
router.post("/create", authenticateUser, isAdmin, createUser);
router.put("/edit/:id", authenticateUser, isAdmin, updateUser);
router.delete("/delete/:id", authenticateUser, isAdmin, deleteUser);

export default router;