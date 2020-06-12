const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/config');
module.exports = {
  generateToken(user) {
    let payload = { id: user.id };
    let token = jwt.sign(payload, config.SECRET_KEY, {
      expiresIn: config.EXPIRES_IN
    });
    return token;
  },
  async isPasswordMatch(currentPassword, actualPassword) {
    return await new Promise((resolve, reject) => {
      let isPasswordMatch = false;
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
