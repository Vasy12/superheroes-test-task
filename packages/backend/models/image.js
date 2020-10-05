'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Superhero, {
        foreignKey: {
          allowNull: false,
          field: 'superhero_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
      });
    }
  }
  Image.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Image',
      underscored: true,
      tableName: 'images',
    }
  );
  return Image;
};
