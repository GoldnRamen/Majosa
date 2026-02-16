import jwt from "jsonwebtoken";

// Middleware to authenticate user using JWT
export const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization header missing or malformed" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

// Middleware to authorize user based on role
export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ success: false, message: "Forbidden: You do not have access to this resource" });
        }
        next();
    };
};

// Middleware to check if user is authenticated
export const isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: Please log in to access this resource" });
    }
    next();
};

// Middleware to check if user is admin
export const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next();
};

// Middleware to check if user is manager
export const isManager = (req, res, next) => {
    if (!req.user || req.user.role !== "manager") {
        return res.status(403).json({ message: "Forbidden: Managers only" });
    }
    next();
};

// Middleware to check if user is customer
export const isCustomer = (req, res, next) => {
    if (!req.user || req.user.role !== "customer") {
        return res.status(403).json({ message: "Forbidden: Customers only" });
    }
    next();
};





