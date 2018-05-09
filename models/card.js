module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    question: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    answer: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    deck_ID: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  });

  Card.associate = function(models) {
    Card.belongsTo(models.Deck, {
      foreignKey: { allowNull: true }
    });
  };

  return Card;
};
