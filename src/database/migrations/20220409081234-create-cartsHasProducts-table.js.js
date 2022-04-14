'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('cartsHasProducts', { 
       
      carts_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'carts',
          },
          key:'id',
          onDelete:'CASCADE',
          defaultValue: 1
        }
    },
    products_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'products',
          },
          key:'id',
          onDelete:'CASCADE',
          defaultValue: 1
        }
    },
    amount:{
        type: Sequelize.INTEGER
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
     await queryInterface.dropTable('cartsHasProducts');
  }
};
