'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    'Comment', 
    {
    u_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    t_id: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      validate: {
        len: [20,2000]
      }
    },
  }, {});
  comment.associate = function(models) {
    models.Comment.belongsTo(models.User, { foreignKey: "u_id", targetKey: "id" });

  };
  return comment;
};