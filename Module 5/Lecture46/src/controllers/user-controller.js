const User = require("../models/User");

const addNewuser = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const user = new User({ name, age, email, password });
    await user.save();
    return res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmailAndPasswordForAuth(email, password);
    console.log("user with email: " + email + " successfully logged in");
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Invalid email or password" });
  }
};

module.exports = { loginUser, addNewuser };
