const Router = require("express").Router();

const { authorize } = require("../middlewares/auth.middleware");

// #region (Authentication Routes)
const { login } = require("../controllers/auth.controller");
Router.post("/login", login);

const { register } = require("../controllers/auth.controller");
Router.post("/register", register);
// #endregion (Authentication Routes)

//#region ( Ticket routes)
const { getTickets } = require("../controllers/tickets.controller");
Router.get("/tickets", authorize, getTickets);

const { addTicket } = require("../controllers/tickets.controller");
Router.post("/tickets", authorize, addTicket);
//#endregion (Ticket routes)

//#region (Comment Routes)
const { getComments } = require("../controllers/comments.controller");
Router.get("/comments", authorize, getComments);

const { postComment } = require("../controllers/comments.controller");
Router.post("/comments", authorize, postComment);

//#endregion

module.exports = Router;
