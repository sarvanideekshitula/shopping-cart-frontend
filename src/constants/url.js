const host = 'http://localhost:8080/';
const productList = `${host}products`;
const productListByCategory = `${host}products/category/`;
const categoryList = `${host}categories`;
const addToCart = `${host}cart/add-to-cart`;
const removeFromCart = `${host}cart/remove`;
const cartCount = `${host}cart/count`;
const cartDetails = `${host}cart/details`;
const checkout = `${host}cart/checkout`;
module.exports = {
  productList,
  productListByCategory,
  categoryList,
  addToCart,
  removeFromCart,
  cartCount,
  cartDetails,
  checkout,
};
