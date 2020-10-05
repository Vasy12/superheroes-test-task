'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperheroPowers extends Model {}

  SuperheroPowers.init(
    {
      SuperheroId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Superhero', // 'Movies' would also work
          key: 'id',
        },
      },
      SuperpowerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Superpower', // 'Actors' would also work
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'SuperheroPowers',
      underscored: true,
      tableName: 'superhero_powers',
    }
  );
  return SuperheroPowers;
};
