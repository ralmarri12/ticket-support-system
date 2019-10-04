const Router = require("express").Router();

const { authorize } = require("../middlewares/auth.middleware");

// #region (Authentication Routes)
const { login, register } = require("../controllers/auth.controller");
Router.post("/login", login);
Router.post("/register", register);
// #endregion (Authentication Routes)

//#region ( Ticket routes)
const {
  getTickets,
  getTicket,
  addTicket
} = require("../controllers/tickets.controller");
Router.get("/tickets", authorize, getTickets);
Router.get("/tickets/:ticket_id", authorize, getTicket);
Router.post("/tickets", authorize, addTicket);
//#endregion (Ticket routes)

//#region (Comment Routes)
const {
  getComments,
  postComment
} = require("../controllers/comments.controller");
Router.get("/comments", authorize, getComments);
Router.post("/comments", authorize, postComment);

//#endregion

module.exports = Router;
