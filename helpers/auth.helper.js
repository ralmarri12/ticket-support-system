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
  return jwt.verify(token, process.env.ENC_KEY);
};

const loginProcess = async (email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
   
      const token = await generateToken(user.dataValues);
      return {
        user,
        token
      };
  }

  throw new Error("WRONG_PASSWORD_OR_USERNAME");
};

const registerProcess = async (name, email, password) => {

  const userToRegister = {
    name,
    email,
    password,
  };

  const result = await UserModel.create(userToRegister);
  const token = await generateToken(result.dataValues);

  if (result) {
    return {
      user: result,
      token
    };
  }

  throw new Error("UNEXPECTED_ERROR");
};

module.exports = { loginProcess, registerProcess, decodeToken };
