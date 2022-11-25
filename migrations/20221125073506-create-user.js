'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserName: {
        type: Sequelize.STRING(25)
      },
      UserSurname: {
        type: Sequelize.STRING(25)
      },
      UserPatronymic: {
        type: Sequelize.STRING(25)
      },
      UserTelNumber: {
        type: Sequelize.STRING(20)
      },
      UserLogin: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      UserEMail: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      UserLicense: {
        allowNull: false,
        type: Sequelize.STRING,
        TypeLicense: 'commercial',
        DefaultLicense: 'free' // default=free, Свободная (free), коммерческая(commercial), индивидуальная(individual)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};