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

  // Author.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Deck;
};
