const TicketModel = require("../models").Ticket;

const { createTicket, getTicket } = require("../helpers/tickets.helper");

const getTickets = async (req, res) => {
  try {
    const result = await getTicket(req.user);
    return res.json({
      message: "success",
      data: {
        result
      }
    });
  } catch (error) {
    return res.json({
      message: "failed",
      data: error.message
    });
  }
};

const addTicket = async (req, res) => {
  try {
    const result = await createTicket(
      req.user.id,
      req.body.title,
      req.body.description
    );
    return res.json({
      message: "success",
      data: {
        result
      }
    });
  } catch (error) {
    return res.json({
      message: "failed",
      data: error.message
    });
  }
};

module.exports = { getTickets, addTicket };
