const CommentModel = require('../models').Comment;  
const UserModel = require('../models').User;
const getCommentsByTicketID = async (t_id) => {
    
    return await CommentModel.findAll({
        where: {
            t_id
        },
        include: UserModel
    });
} 

module.exports = {getCommentsByTicketID}