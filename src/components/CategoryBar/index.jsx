import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './index.module.css';


const CategoryBar = (props) => {
  const { categories, buttonClick, testId } = props;
  const categoryList = categories.map((category) => <li className={styles.listelement}><button className={styles.listlink} type="button" onClick={() => buttonClick(category)} name={category}>{category}</button></li>);
  return (
    <div className={styles.CategoryBar} data-testId={testId}>
      <h3>Filter Categories</h3>
      <ul className={styles.list}>
        <li className={styles.listelement}>
          <a href="/products"><button className={styles.listlink} type="button">All</button></a>
        </li>
        {categoryList}
      </ul>
    </div>
  );
};

CategoryBar.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  categories: PropTypes.objectOf.isRequired,
  testId: PropTypes.string.isRequired,
};
export default CategoryBar;
