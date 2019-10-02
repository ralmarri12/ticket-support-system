'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', 
  {
    u_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, 
      allowNull: false,
      validation: {
        len: [20, 2000],
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};