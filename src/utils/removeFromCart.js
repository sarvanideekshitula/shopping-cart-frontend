import axios from 'axios';
import url from '../constants/url';

const removeFromCart = async (productId) => {
  const response = await axios({
    method: 'post',
    url: url.removeFromCart,
    data: {
      productId,
    },
  });
  return response.data;
};

export default removeFromCart;
