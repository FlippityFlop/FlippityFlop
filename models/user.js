module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    displayName: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  });

  User.associate = function(models) {
    // Associating User with Decks
    // When a User is deleted, also delete any associated Decks
    User.hasMany(models.Deck, {
      onDelete: "cascade"
    });
  };

  return User;
};
