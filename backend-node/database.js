const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("greetings_db", "greeting_user", "NewStrongAppPw!", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch(err => console.error("Unable to connect to DB:", err));

module.exports = sequelize;

