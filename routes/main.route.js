const Router = require("express").Router();

// #region (Authentication Routs)
const { login } = require("../controllers/auth.controller");
Router.post("/login", login); 

const { register } = require("../controllers/auth.controller"); 
Router.post("/register", register); 


// #endregion (Authentication Routs)

module.exports = Router; 
 