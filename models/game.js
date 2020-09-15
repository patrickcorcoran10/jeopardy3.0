module.exports = function (sequelize, DataTypes) {
  const Game = sequelize.define("Games", {
    gameName: {
      type: DataTypes.STRING,
    },
    gameAuthor: {
      type: DataTypes.STRING,
    },
  });
  return Game;
};
