module.exports = function(sequelize, DataTypes) {
  var SelectedDeck = sequelize.define("SelectedDeck", {
    find_deck: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  });
  return SelectedDeck;
};
