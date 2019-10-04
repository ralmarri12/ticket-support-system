"use strict"; 

const crypto = require("crypto");  

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 255]
        }
      },
      email: {
        type: DataTypes.STRING, 
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: { 
        type: DataTypes.STRING
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };

  User.encryptPassword = function(password) {
    return crypto
        .createHash('RSA-SHA256')
        .update(password)
        .update(process.env.ENC_KEY)
        .digest('hex')
  }; 

  const setSaltAndPassword = user => { 
    if (user.changed('password')) {
        user.password = User.encryptPassword(user.password);
    }
};
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword) 

User.prototype.correctPassword = function(enteredPassword) {
  return User.encryptPassword(enteredPassword) === this.password
}

  return User;
};
