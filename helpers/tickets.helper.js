const TicketModel = require("../models").Ticket;
const {getCommentsByTicketID} = require("../helpers/comments.helper");  

const getTicketsProccess = async (user, page) => {
  if (page < 0) {
    throw new Error("Page number does not make any sense");
  }

  const offset = parseInt(page * process.env.PAGE_SIZE);
  const limit = parseInt(offset + process.env.PAGE_SIZE);
  let result;

  if (user.g_id == "customer") {
    result = await TicketModel.findAll({
      limit,
      offset,
      where: {
        u_id: user.id
      },
      attributes: ["id", "u_id", "title", "status", "createdAt"]
    });
  } else {
    result = await TicketModel.findAll({
      limit,
      offset,
      attributes: ["id", "u_id", "title", "status", "createdAt"]
    });
  }

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

const getTicketById = async ticketID => {
  let result = await TicketModel.findOne({
    where: {
      id: ticketID
    }
  });

  if (result) {
    return {ticket: result, comments: await getCommentsByTicketID(ticketID)};
  }

  throw new Error("Data is not available");
};

module.exports = {
  getTicketsProccess,
  createTicket,
  getTicketById
};
