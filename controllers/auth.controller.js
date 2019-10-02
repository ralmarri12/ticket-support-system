const { loginProcess, registerProcess } = require("../helpers/auth.helper");

const login = async (req, res) => {
  try {
    const foundUser = await loginProcess(
      req.body.email.trim(),
      req.body.password.trim()
    );
    return res.sendSuccess({ user: foundUser.user, token: foundUser.token });
  } catch (error) {
    return res.sendError(error);
  }
};

const register = async (req, res) => {
  try {
    const register = await registerProcess(
      req.body.name.trim(),
      req.body.email.trim(),
      req.body.password.trim()
    );

    return res.sendSuccess({ user: register.user, token: register.token });
  } catch (error) {
    return res.sendError(error);
  }
};

module.exports = {
  login,
  register
};
