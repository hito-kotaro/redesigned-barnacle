'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('approvals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questId: {
        type: Sequelize.INTEGER,
        references: { model: 'quests', key: 'id' },
      },
      description: {
        type: Sequelize.STRING,
      },
      applicantId: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      authorizerId: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      status: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('approvals');
  },
};
