const { decodeToken } = require("../helpers/auth.helper");

const authorize = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    const decodedUser = await decodeToken(token);
    req.user = decodedUser;
    next();
  } catch (error) {
    return res.json({
      error: "Unauthorized Request"
    });
  }
};

module.exports = { authorize };
