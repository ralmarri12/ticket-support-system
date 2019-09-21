const Router = require("express").Router();

// #region (Authentication Routs)
const { login } = require("../controllers/auth.controller");
Router.post("/login", login);
// #endregion (Authentication Routs)

module.exports = Router;
