const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}
//This defines the book model.
Book.init(
  {
    isbn13: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    isbn10: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    subtitle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    authors: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    categories: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    thumbnail: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      published_year: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    average_rating: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
    num_pages: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    ratings_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);
//This exports the model to be used throughout.
module.exports = Book;
