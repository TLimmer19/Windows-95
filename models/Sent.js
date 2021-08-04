const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sent extends Model {}

Sent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45],
      },
    },
    recipent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45],
      },
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'sent',
  }
);

module.exports = Sent;
