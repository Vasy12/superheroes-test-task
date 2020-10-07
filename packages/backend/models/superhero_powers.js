'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperheroPowers extends Model {}

  SuperheroPowers.init(
    {
      superheroId: {
        field: 'superhero_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'Superhero',
          key: 'id',
        },
      },
      superpowerId: {
        field: 'superpower_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'Superpower',
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
