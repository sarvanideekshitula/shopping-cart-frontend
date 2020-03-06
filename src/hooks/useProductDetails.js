import { useState, useEffect } from 'react';
import productList from '../utils/productList';

const useProductDetails = () => {
  const [data, setData] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(null);
  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const products = await productList();
        setData(products);
        setFetchComplete(true);
      } catch (err) {
        setFetchComplete(false);
      }
    };
    asyncFunc();
  }, []);
  return [data, setData, fetchComplete];
};
export default useProductDetails;
