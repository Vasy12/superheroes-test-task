'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate(models) {
      Superhero.belongsToMany(models.Superpower, {
        through: {
          model: models.SuperheroPowers,
          unique: true,
        },
      });
      Superhero.hasMany(models.Image);
    }
  }
  Superhero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'real_name',
      },
      originDescription: {
        type: DataTypes.STRING(512),
        allowNull: false,
        field: 'origin_description',
      },
      catchPhrase: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'catch_phrase',
      },
    },
    {
      sequelize,
      modelName: 'Superhero',
      underscored: true,
      tableName: 'superheroes',
    }
  );
  return Superhero;
};
