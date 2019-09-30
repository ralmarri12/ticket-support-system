const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const UserModel = require("../models").User;

const findUserByEmail = async email => {
  return UserModel.findOne({
    where: {
      email: email
    }
  });
};

const generateToken = async userInformation => {
  return jwt.sign(userInformation, process.env.ENC_KEY);
};

const decodeToken = async token => {
  return jwt.decode(token, { key: process.env.ENC_KEY });
};

const compareHashedPassword = async (hashedPassword, plainPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

const login = async (email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    const compareResult = await compareHashedPassword(user.password, password);
    if (compareResult) {
      const token = await generateToken(user.dataValues);
      return {
        user,
        token
      };
    }
  }

  throw new Error("WRONG_PASSWORD_OR_USERNAME");
};

module.exports = { login };
