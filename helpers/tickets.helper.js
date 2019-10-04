const TicketModel = require("../models").Ticket;

const getTicketsProccess = async (user, page) => {


  if (page < 0) {
    throw new Error("Page number does not make any sense");
  }

  const offset = parseInt(page * process.env.PAGE_SIZE);
  const limit = parseInt(offset + process.env.PAGE_SIZE);

  const result = await TicketModel.findAll({
    limit,
    offset
  }); 
  if (result && result.length > 0) {
    return result;
  }

  throw new Error("no result");
};

const createTicket = async (uid, title, content) => {
  const ticketToAdd = {
    u_id: uid,
    title,
    description: content
  };
  return await TicketModel.create(ticketToAdd);
};

const getTicketById = async (ticketID) => {
  const result = await TicketModel.findOne({
    where: {
      id: ticketID
    }
  });

  if (result) {
    return result;
  }

  throw new Error("Data is not available");
};

module.exports = {
  getTicketsProccess,
  createTicket,
  getTicketById
};