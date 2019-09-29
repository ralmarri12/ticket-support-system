'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    g_id: DataTypes.STRING,
    g_name: DataTypes.STRING
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
  };
  return UserGroup;
};