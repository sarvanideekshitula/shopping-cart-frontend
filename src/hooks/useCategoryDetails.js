import { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../constants/url';

const useCategortyDetails = () => {
  const [categories, setCategories] = useState([]);
  const [callComplete, setCallComplete] = useState(null);
  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get(url.categoryList);
        if (response.status === 200) {
          const categoryResponse = response.data;
          setCategories(categoryResponse);
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    asyncFunc();
  }, []);
  return [categories, callComplete];
};
export default useCategortyDetails;
