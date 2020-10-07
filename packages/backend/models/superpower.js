'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    static associate(models) {
      Superpower.belongsToMany(models.Superhero, {
        through: {
          model: models.SuperheroPowers,

          unique: true,
        },
        as: {
          plural: 'superheroes',
          singular: 'superhero',
        },
      });
    }
  }
  Superpower.init(
    {
      description: {
        type: DataTypes.STRING(512),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Superpower',
      underscored: true,
      tableName: 'superpowers',
    }
  );
  return Superpower;
};
