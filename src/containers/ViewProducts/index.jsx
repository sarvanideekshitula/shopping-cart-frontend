import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './index.module.css';
import Nav from '../../components/Nav';
import CategoryBar from '../../components/CategoryBar/index';
import CardList from '../../components/CardList/index';
import useProductDetails from '../../hooks/useProductDetails';
import useCategortyDetails from '../../hooks/useCategoryDetails';
import productList from '../../utils/productList';

const ViewProducts = (props) => {
  const [data, setData, fetchComplete] = useProductDetails();
  const [categories, callComplete] = useCategortyDetails();
  const { testId } = props;
  const fetchProducts = async (category) => {
    const data2 = await productList(category);
    setData(data2);
  };

  if (fetchComplete && callComplete) {
    return (
      <div className={styles.ViewProducts} data-testId={testId}>
        <Nav />
        <CategoryBar
          categories={categories}
          buttonClick={(category) => { fetchProducts(category); }}
        />
        <CardList products={data} />
      </div>
    );
  }
  return (
    <div className={styles.ViewProducts}>
      <Nav />
      <p>Loading...</p>
    </div>
  );
};
ViewProducts.propTypes = {
  testId: PropTypes.string.isRequired,
};
export default ViewProducts;
