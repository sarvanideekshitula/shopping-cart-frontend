import { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../constants/url';

const useCartDetails = () => {
  const [cart, setCart] = useState({});
  const [callComplete, setCallComplete] = useState(null);
  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get(url.cartDetails);
        if (response.status === 200) {
          const cartResponse = response.data;
          setCart(cartResponse);
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    asyncFunc();
  }, []);
  return [cart, callComplete];
};
export default useCartDetails;
