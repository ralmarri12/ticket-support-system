const TicketModel = require("../models").Ticket;

const getTickets =  async (req, res) => { 
    const getAllTickets = await TicketModel.findAll();

    res.json(getAllTickets); 
}  

const addTicket = async (req, res) => { 

    const u_id = req.body.u_id; 
    const description = req.body.description;  

    const ticketToAdd = {
        u_id: u_id, 
        description: description, 
        status: "Received"
    }; 

    const result = await TicketModel.create(ticketToAdd);

    return res.json ({ 
        message: "success", 
        data:  { 
            result
        }
    }); 
}

module.exports = { getTickets, addTicket }; 