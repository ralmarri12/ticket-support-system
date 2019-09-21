const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const users = require("../seeders/users");

  // Check authentication

  return res.json({
    message: "successful",
    token: "adsfadsfa1ds2fasd23fa1dsfad32sf1ads2f1a",
    data: {
      email,
      password
    }
  });
};

const register = (req, res) => {};

module.exports = { login };
