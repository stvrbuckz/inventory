module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    prod_id:{type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true},
    cat_id: Sequelize.INTEGER,
    sku: Sequelize.STRING,
    prod_name: Sequelize.STRING,
    prod_brand: Sequelize.STRING,
    prod_size: Sequelize.STRING,
    colour: Sequelize.STRING,
    prod_price: Sequelize.DECIMAL(5, 2),
    location: Sequelize.STRING,
    prod_descrip: Sequelize.STRING,
    is_available: Sequelize.BOOLEAN,
    available_quantity: Sequelize.INTEGER,
    is_discount: Sequelize.BOOLEAN,
    discount: Sequelize.DECIMAL(3, 2),
    manufactured: Sequelize.DATE,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    freezeTableName: true,
    timestamps: true
  });
  return Product;
};
//   prod_id: {
//     type: Sequelize.INTEGER
//   },
//   cat_id: {
//     type: Sequelize.INTEGER
//   },
//   sku: {
//     type: Sequelize.STRING
//   },
//   prod_name:{
//     type: Sequelize.STRING
//   },
//   prod_brand:{
//     type: Sequelize.STRING
//   },
//   prod_size:{
//     type: Sequelize.STRING
//   },
//   colour:{
//     type: Sequelize.STRING
//   },
// prod_price:{
//   type: Sequelize.DECIMAL(5, 2)
// },
// location:{
//   type: Sequelize.STRING
// },
// prod_descrip:{
//   type: Sequelize.STRING
// },
// is_available:{
//   type: Sequelize.BOOLEAN
// },
// available_quantity:{
//   type: Sequelize.INTEGER
// },
// is_discount:{
//   type: Sequelize.BOOLEAN
// },
// discount:{
//   type: Sequelize.DECIMAL(3,2)
// },
// manufactured:{
//   type: Sequelize.STRING
// },
// createdAt:{
//   type: Sequelize.DATE,
//   timestamps: true
// },
// deletedAt:{
//   type: Sequelize.DATE,
//   timestamps: true
// },
//   freezeTableName: true
// });
//   return Product;
// };
