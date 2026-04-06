const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user,
  });
});

router.post("/register", registerUser);
router.post("/login", loginUser);   // ✅ لازم السطر ده

module.exports = router;