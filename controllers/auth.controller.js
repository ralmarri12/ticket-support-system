const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const UserModel = require("../models").User;

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const foundUser = await UserModel.findOne({
    where: {
      email: email
    }
  });

  if (foundUser) {
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (checkPassword) {
      const privateKey = "rashid";
      const token = await jwt.sign({ foundUser }, privateKey);

      return res.json({
        message: "successful",
        token,
        data: {
          email,
          password
        }
      });
    }
  }

  return res.json({
    message: "failed",
    data: "wrong username or password"
  });
};

const register = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const usetToRegister = {
    name,
    email: email,
    password: hashedPassword,
    g_id: "customer"
  };

  const result = await UserModel.create(usetToRegister);

  const privateKey = "rashid";
  const token = await jwt.sign({ result }, privateKey);

  return res.json({
    message: "successful",
    token,
    data: {
      result
    }
  });
};

module.exports = {
  login,
  register
};
