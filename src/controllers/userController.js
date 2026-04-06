const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error logging in user",
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser };