module.exports = (sequelize, Sequelize) => {
  const subcriptions = sequelize.define("subcriptions", {
    id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return subcriptions;
};