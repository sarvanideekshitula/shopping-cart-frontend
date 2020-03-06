import axios from 'axios';
import url from '../constants/url';

const addToCart = async (productId) => {
  const response = await axios({
    method: 'post',
    url: url.addToCart,
    data: {
      productId,
      quantity: 1,
    },
  });
  return response.data;
};

export default addToCart;
