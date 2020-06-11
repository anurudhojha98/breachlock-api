const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  generateToken(user) {
    let payload = { id: user.id, userType: user.userType };
    let token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_IN
    });
    return token;
  },
  async isPasswordMatch(currentPassword, actualPassword) {
    return await new Promise((resolve, reject) => {
      isPasswordMatch = false;
      bcrypt.compare(currentPassword, actualPassword, (err, isMatched) => {
        if (err) reject(err);
        if (!isMatched) {
          resolve(isPasswordMatch);
        }
        resolve((isPasswordMatch = true));
      });
    });
  }
};
