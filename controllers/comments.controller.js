const CommentModel = require("../models").Comment;

const getComments = async (req, res) => { 

  try { 
    const result = getCommentsByTicketID(req.param.t_id); 
    return res.sendSuccess(result);
    } catch(error) {
      return res.sendError(error)
    }
};

const postComment = async (req, res) => {
  const u_id = req.body.u_id;
  const t_id = req.body.t_id;
  const content = req.body.content;

  const commentToPost = { 
    u_id: u_id,
    t_id: t_id,
    content: content
  };

  const result = await CommentModel.create(commentToPost);

  return res.json({
    result: "success",
    message: "comment has been posted",
    data: result
  });
};

module.exports = { getComments, postComment };
