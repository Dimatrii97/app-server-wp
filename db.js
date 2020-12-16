const Sequelize = require('sequelize');
const Op = Sequelize.Op
const sequelize = new Sequelize ('testvkr', 'postgres', '12345678', {
  host: 'localhost',
  port:'5432',
  dialect:'postgres',
  define: {
    timestamps: false
  }
});
sequelize.sync();
sequelize.authenticate().then(() => {
  }).catch(err => {
  })
module.exports = sequelize;