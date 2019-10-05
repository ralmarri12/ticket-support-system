const CommentModel = require('../models').Comment;  

const getCommentsByTicketID = async (t_id) => {
    
    return await CommentModel.findAll({
        where: {
            t_id
        }
    });
} 

module.exports = {getCommentsByTicketID}