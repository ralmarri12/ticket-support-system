const Router = require("express").Router();

// #region (Authentication Routes)
const { login } = require("../controllers/auth.controller");
Router.post("/login", login);

const { register } = require("../controllers/auth.controller");
Router.post("/register", register);
// #endregion (Authentication Routes)

//#region ( Ticket routes)
const { getTickets } = require("../controllers/tickets.controller");
Router.get("/tickets", getTickets);

const { addTicket } = require("../controllers/tickets.controller");
Router.post("/tickets", addTicket);
//#endregion (Ticket routes) 

//#region (Comment Routes) 
const {getComments} = require("../controllers/comments.controller"); 
Router.get("/comments", getComments);

const {postComment} = require("../controllers/comments.controller"); 
Router.post("/comments", postComment);

//#endregion

module.exports = Router;
