const { DataTypes } = require('sequelize'); const sequelize = require('./db');
const Product = sequelize.define(
'Product',
{
name: {
    type: DataTypes.STRING
  },
  imageURL: {
    type: DataTypes.STRING
} 
,
type: {
    type: DataTypes.STRING
} 
}
);

module.exports = Product;