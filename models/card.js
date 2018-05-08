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

  // Author.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Card;
};
