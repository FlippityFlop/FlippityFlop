module.exports = function(sequelize, DataTypes) {
  var Deck = sequelize.define("Deck", {
    deck_name: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    user_ID: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Deck.associate = function(models) {
    Deck.hasMany(models.Card, {
      onDelete: "cascade"
    });
  };

  return Deck;
};
