import express from "express";
import { registerUser , loginUser, getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

// User registration
router.post("/register", registerUser);
// User login
router.post("/login", loginUser);
// Get all users
router.get("/", getAllUsers);
// Get user by ID
router.get("/:id", getUserById);
// Create new user (admin only)
router.post("/", createUser);
// Update user (admin only)
router.put("/:id", updateUser);
// Delete user (admin only)
router.delete("/:id", deleteUser);
