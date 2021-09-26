const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "123456789", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log("Connection has been established successfully.");
    });
    console.log("conncetionestablished with db");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
