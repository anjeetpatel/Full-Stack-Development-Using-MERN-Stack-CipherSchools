const bcrypt = require("bcrypt");

const encryptPassword = async (plainTextPassword) => {
  try {
    return await bcrypt.hash(plainTextPassword, 8);
  } catch (err) {
    return err;
  }
};

const checkPassword = async (plainTextPassword, encryptedPassword) => {
  return bcrypt.compare(plainTextPassword, encryptedPassword);
};

module.exports = { encryptPassword, checkPassword };
