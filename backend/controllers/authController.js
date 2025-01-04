const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { signupSchema, loginSchema } = require("../validators/authValidators");

const SECRET_KEY = process.env.SECRET_KEY;

const signup = async (req, res) => {
  try {
    // Validate the request body using the schema
    const validatedData = signupSchema.parse(req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const newUser = new User({
      ...validatedData,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup Error:", err);

    if (err.errors) {
      return res.status(400).json({ errors: err.errors });
    }

    // Provide more descriptive error messages if the issue is server-related
    res.status(500).json({ error: "An unexpected server error occurred during signup" });
  }
};

const login = async (req, res) => {
  try {
    // Validate the login request body
    const validatedData = loginSchema.parse(req.body);

    // Find the user by email
    const user = await User.findOne({ email: validatedData.email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login Error:", err);

    if (err.errors) {
      return res.status(400).json({ errors: err.errors });
    }

    // Provide more descriptive error messages if the issue is server-related
    res.status(500).json({ error: "An unexpected server error occurred during login" });
  }
};

module.exports = { signup, login };
