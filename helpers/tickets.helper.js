const TicketModel = require("../models").Ticket;

const getTicketsProccess = async user => {
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

const getTicketById = async ticketID => {};

module.exports = { getTicketsProccess, createTicket };
