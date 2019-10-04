const TicketModel = require("../models").Ticket;

const {
  createTicket,
  getTicketsProccess
} = require("../helpers/tickets.helper");

const getTickets = async (req, res) => {
  try {
    const result = await getTicketsProccess(req.user);
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

const getTicket = async (req, res) => {
  const ticketID = req.params.ticket_id;
};

module.exports = { getTickets, addTicket, getTicket };
