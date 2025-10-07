const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Greeting = sequelize.define("Greeting", {
  message: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Greeting;
