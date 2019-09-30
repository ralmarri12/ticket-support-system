const AuthHelper = require("../helpers/auth.helper");

const login = async (req, res) => {
  try {
    const foundUser = await AuthHelper.login(
      req.body.email.trim(),
      req.body.password.trim()
    );

    return res.json({
      message: "successful",
      token: foundUser.token,
      data: foundUser.user
    });
  } catch (error) {
    return res.json({
      message: "failed",
      data: error.message
    });
  }
};

const register = async (req, res) => {
  try {
    const register = await AuthHelper.register(
      req.body.name.trim(),
      req.body.email.trim(),
      req.body.password.trim()
    );

    return res.json({
      message: "successful",
      token: register.token,
      data: register.user
    });
  } catch (error) {
    return res.json({
      message: "failed",
      data: error.message
    });
  }
};

module.exports = {
  login,
  register
};
