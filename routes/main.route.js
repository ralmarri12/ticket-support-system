const Router = require("express").Router();

// #region (Authentication Routes)
const { login } = require("../controllers/auth.controller");
Router.post("/login", login);

const { register } = require("../controllers/auth.controller");
Router.post("/register", register);
// #endregion (Authentication Routes)

//#region ( Ticket routes)
const { getTickets } = require("../controllers/tickets.controller");
Router.get("/getTickets", getTickets);

const { addTicket } = require("../controllers/tickets.controller");
Router.post("/addTicket", addTicket);
//#endregion (Ticket routes)

module.exports = Router;
