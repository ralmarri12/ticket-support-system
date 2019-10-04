const TicketModel = require("../models").Ticket;

const {
  createTicket,
  getTicketsProccess,
  getTicketById
} = require("../helpers/tickets.helper");

const getTickets = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const result = await getTicketsProccess(req.user, page - 1);
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

  try {
    const result = await getTicketById(ticketID);
    return res.sendSuccess(result);
  } catch (error) {
    return res.sendError(error);
  }
};

module.exports = { getTickets, addTicket, getTicket };
