import axios from 'axios';

import url from '../constants/url';

const productList = async (category) => {
  try {
    let response = [];
    if (category) response = await axios.get(`${url.productListByCategory}${category}`);
    else response = await axios.get(url.productList);

    const cartResponse = await axios.get(url.cartDetails);
    if (response.status === 200) {
      const products = response.data;
      const cart = cartResponse.data;
      if (cart.items && cart.items.length) {
        cart.items.forEach((item) => {
          const productIndex = products.findIndex((product) => product.id === item.productId);
          if (productIndex > -1) products[productIndex].selectedQuantity = item.quantity;
        });
      }
      console.log(products);
      return products;
    }
    return [];
  } catch (err) {
    return [];
  }
};

export default productList;
