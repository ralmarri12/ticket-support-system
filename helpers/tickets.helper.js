const TicketModel = require("../models").Ticket;

const getTicket = async user => {
  return await TicketModel.findAll();
};

const createTicket = async (uid, title, content) => {
  const ticketToAdd = {
    u_id: uid,
    title,
    description: content
  };
  return await TicketModel.create(ticketToAdd);
};

module.exports = { getTicket, createTicket };
