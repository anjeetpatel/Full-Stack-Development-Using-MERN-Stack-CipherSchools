const User = require("../models/User");

const addNewuser = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const user = new User({ name, age, email, password });
    await user.save();
    const token = user.generateToken();
    return res
      .status(201)
      .json({ message: "User added successfully", user, token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmailAndPasswordForAuth(email, password);
    const token = user.generateToken();
    console.log("user with email: " + email + " successfully logged in");
    return res.status(200).send({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Invalid email or password" });
  }
};

const deleteUser = async (req, res) => {
  const { user } = req;
  const userId = user._id;
  const deletedResult = await User.deleteOne({ _id: userId });
  if (!deletedResult.deletedCount) {
    return res
      .status(404)
      .send({ message: `Delete Failed! User with UserId ${userId} not found` });
  }
  return res
    .status(200)
    .send({ message: `Delete Success! User with UserId ${userId} deleted` });
};

module.exports = { loginUser, addNewuser, deleteUser };
