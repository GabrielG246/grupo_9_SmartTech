'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable('products', {
        
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      name:{
          type: Sequelize.STRING,
          allowNull: false
      },
      price:{
          type: Sequelize.DECIMAL,
          allowNull: false
      },
      description:{
          type: Sequelize.STRING,
          allowNull: false
      },
      specifications:{
          type: Sequelize.STRING,
          allowNull: false
      },
      color:{
          type: Sequelize.STRING,
          allowNull: false
      }
        
        
        });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('products');
  }
};
