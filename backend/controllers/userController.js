import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, role } = req.body;
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({success: false, message: "User already exists" });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create new user
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
            role: role || "customer", // Default to "customer" if no role specified
        });
        await newUser.save();
        res.status(201).json({success: true, message: "User registered successfully", data: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({success: false, message: "Server error" });
    }
};

// Login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({success: false, message: "Invalid credentials" });
        }
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({success: false, message: "Invalid credentials" });
        }
        // Ensure JWT secret is configured
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            console.error('JWT secret is not set (JWT_SECRET)');
            return res.status(500).json({ success: false, message: 'Server misconfiguration: JWT secret not set' });
        }
        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role }, 
            jwtSecret, 
            { expiresIn: "24h" }
        );
        return res.status(200).json({ success: true, message: "Login successful", token:token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }   
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().select("-password");
        return res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Get user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({success: false, message: "User not found" });
        } 
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({success: false, message: "Server error" });
    }
};

// Update user
export const updateUser = async (req, res) => {
    try {
        const { firstName, lastName, email, phone } = req.body;
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({success: false, message: "User not found" });
        }
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        await user.save();
        res.json({success: true, message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({success: false, message: "Server error" });
    }
};

// Create new user (admin only)
export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, role } = req.body;
        
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({success: false, message: "User already exists" });
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create new user with optional role
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
            role: role || "customer", // Default to "customer" if no role specified
        });
        
        await newUser.save();
        res.status(201).json({success: true, message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({success: false, message: "Server error" });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({success: false, message: "User not found" });
        }
        await user.remove();
        res.json({success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({success: false, message: "Server error" });
    }
};



