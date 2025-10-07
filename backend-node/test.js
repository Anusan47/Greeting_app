const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("greetingsdb", "greeting_user", "password123", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("DB connected!"))
  .catch(err => console.error("DB error:", err));
