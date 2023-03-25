'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders.init({
    idUser: DataTypes.INTEGER,
    maSanPham: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    idSP : DataTypes.INTEGER,
    thanhTien: DataTypes.INTEGER,
    soLuong: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};