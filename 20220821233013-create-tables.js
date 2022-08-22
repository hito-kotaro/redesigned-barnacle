'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hashed_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hashed_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      point: {
        allowNull: false,
        default: 0,
        type: Sequelize.INTEGER,
      },
      account_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'accounts', key: 'id' },
      },
      account_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'roles', key: 'id' },
      },
      team_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'teams', key: 'id' },
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

    await queryInterface.createTable('quests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      reward: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ownre_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });

    await queryInterface.createTable('approvals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      reward: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ownre_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('quests');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('roles');
    await queryInterface.dropTable('teams');
    await queryInterface.dropTable('accounts');
  },
};
