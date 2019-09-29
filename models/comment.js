'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('Comment', {
    u_id: DataTypes.INTEGER,
    t_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};