const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('manager_tasks', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection done!');
    } catch (error) {
        console.error('Connection false:', error);
    }
})();

module.exports = sequelize;