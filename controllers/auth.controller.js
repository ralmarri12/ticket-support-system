const users = require("../seeders/users");
const bcrypt = require("bcrypt");

const UserModel = require("../models").User;

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check authentication

  const foundUser = users.find(user => user.email == email);

  if (foundUser) {
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (checkPassword) {
      return res.json({
        message: "successful",
        token: "adsfadsfa1ds2fasd23fa1dsfad32sf1ads2f1a",
        data: {
          email,
          password
        }
      });
    }
  }

  return res.json({
    message: "failed",
    // token: "adsfadsfa1ds2fasd23fa1dsfad32sf1ads2f1a",
    data: "wrong username or password"
  });
};

const register = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  // const foundEmail = users.find(user => user.email == email);

  // if (foundEmail) {
  //   return res.json({
  //     message: "failed",
  //     data: "the given email already has a user in the system"
  //   });
  // }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const usetToRegister = {
    name,
    email: email,
    password: hashedPassword
  };

  const result = await UserModel.create(usetToRegister);

  return res.json({
    message: "successful",
    token: "adsfadsfa1ds2fasd23fa1dsfad32sf1ads2f1a",
    data: {
      result
    }
  });
};

module.exports = {
  login,
  register
};
