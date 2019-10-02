const TicketModel = require("../models").Ticket;

const { createTicket, getTicket } = require("../helpers/tickets.helper");

const getTickets = async (req, res) => {
  try {
    const result = await getTicket(req.user);
    return res.sendSuccess(result);
  } catch (error) {
    return res.sendError(error);
  }
};

const addTicket = async (req, res) => {
  try {
    const result = await createTicket(
      req.user.id,
      req.body.title,
      req.body.description
    );
    return res.sendSuccess(result);
  } catch (error) {
    return res.sendError(error);
  }
};

module.exports = { getTickets, addTicket };
