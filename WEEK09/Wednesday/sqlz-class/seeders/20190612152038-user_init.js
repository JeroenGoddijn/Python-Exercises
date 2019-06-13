'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      return queryInterface.bulkInsert('users', [{
        firstName: 'Old',
        lastName: 'Bastard',
        email: 'old.bastard@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'John',
        lastName: 'Wick',
        email: 'jwick@live.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Derron',
        lastName: 'Smith',
        email: 'game-over@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        firstName: 'Hot',
        lastName: 'Coffee',
        email: 'smokinghot@coffee.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('users', null, {});
  }
};
