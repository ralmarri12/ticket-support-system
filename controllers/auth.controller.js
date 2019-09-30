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
  const token = await jwt.sign(result.dataValues, process.env.ENC_KEY);

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
