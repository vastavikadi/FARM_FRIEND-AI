import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup (Email/Password)
export const signupEmail = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({ email, password, isHiveSignup: false });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: "6h" });
        res.status(201).json({ message: "Signup successful", token });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Signup failed" });
    }
};

// Login (Email/Password)
export const loginEmail = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        // console.log(token);
        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Login failed" });
    }
};

// Signup (Hive)
export const signupHive = async (req, res) => {
    try {
        const { hiveAccount } = req.body;

        if (!hiveAccount) {
            return res.status(400).json({ error: "Hive account is required" });
        }

        const existingUser = await User.findOne({ hiveAccount });
        if (existingUser) {
            return res.status(400).json({ error: "Hive account is already registered" });
        }

        const newUser = new User({
            firstName: "Hive User",
            lastName: "Hive User",
            hiveAccount,
            isHiveSignup: true,
        });

        await newUser.save();

        const token = jwt.sign({ userId: newUser._id, hiveAccount: newUser.hiveAccount }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: "Signup successful with Hive account", token });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Signup failed" });
    }
};

// Login Route (Hive)
export const loginHive = async (req, res) => {
    try {
        const { hiveAccount } = req.body;

        if (!hiveAccount) {
            return res.status(400).json({ error: "Hive account is required" });
        }

        const user = await User.findOne({ hiveAccount });
        if (!user) {
            return res.status(401).json({ error: "Invalid Hive account" });
        }

        const token = jwt.sign({ userId: user._id, hiveAccount: user.hiveAccount }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Hive login successful", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Login failed" });
    }
};