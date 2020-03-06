import axios from 'axios';

import url from '../constants/url';

const checkout = async () => {
  const response = await axios({
    method: 'post',
    url: url.checkout,
  });

  return response.data;
};

export default checkout;
