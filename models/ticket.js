"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "Ticket",
    {
      u_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          len: [10, 255]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validation: {
          len: [20, 2000]
        }
      },
      status: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};
