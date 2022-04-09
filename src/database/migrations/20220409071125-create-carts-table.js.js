'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('carts', { 

      id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    total:{
        type: Sequelize.DECIMAL(11,2),
        allowNull: false

    },
    created_at:{
        type: Sequelize.DATE
    },
    updated_at:{
        type: Sequelize.DATE
    },
    deleted_at:{
        type: Sequelize.DATE
    },
    users_id:{
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'users'
          },
          key: 'id',
          onDelete: 'CASCADE',
          defaultValue: 1
        }
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
     await queryInterface.dropTable('carts');
  }
};
