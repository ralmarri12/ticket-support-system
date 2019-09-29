const tickets = require("../seeders/tickets"); 


const getTickets = (req, res) => { 
    res.send (tickets);  
}  


const addTicket = (req, res) => { 

    const u_id = req.body.u_id; 
    const description = req.body.description;  

    const uuid = require('uuid');


    const newObject = {
        id: uuid.v4(), 
        user_id: u_id, 
        description: description, 
        status: "Received"
    }; 

    tickets.push(newObject);  

    return res.json ({ 
        message: "success", 
        data:  { 
            newObject
        }
    }); 
}



module.exports = { getTickets, addTicket }; 