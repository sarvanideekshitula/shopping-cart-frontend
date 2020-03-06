import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './index.module.css';


const CartTable = (props) => {
  const { cart, categories, testId } = props;
  const categoryItems = [];
  categories.forEach((category) => {
    const items = cart.items.filter((item) => item.product.category === category);
    if (items.length) {
      categoryItems.push({ type: 'category', value: category });
      items.forEach((item) => categoryItems.push({ type: 'item', value: item }));
    }
  });
  const categoryList = categoryItems.map((categoryItem) => {
    if (categoryItem.type === 'category') {
      return (
        <tr><td colSpan="4">{categoryItem.value}</td></tr>
      );
    }
    return (
      <tr>
        <td>{categoryItem.value.product.name}</td>
        <td>{categoryItem.value.product.price}</td>
        <td>{categoryItem.value.quantity}</td>
        <td>{categoryItem.value.totalPrice}</td>

      </tr>
    );
  });
  return (
    <div className={styles.CartTable} data-testId={testId}>
      <table className={styles.table}>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>SubTotal</th>
        </tr>
        {categoryList}
      </table>
    </div>
  );
};

CartTable.propTypes = {
  cart: PropTypes.objectOf.isRequired,
  categories: PropTypes.objectOf.isRequired,
  testId: PropTypes.string.isRequired,
};
export default CartTable;
