'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    u_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};