'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    UserName: DataTypes.STRING,
    UserSurname: DataTypes.STRING,
    UserPatronymic: DataTypes.STRING,
    UserTelNumber: DataTypes.STRING,
    UserLogin: DataTypes.STRING,
    UserEMail: DataTypes.STRING,
    UserLicense: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};