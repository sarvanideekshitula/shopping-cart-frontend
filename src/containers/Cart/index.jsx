import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styles from './index.module.css';
import Nav from '../../components/Nav';
import useCartDetails from '../../hooks/useCartDetails';
import CartTable from '../../components/CartTable';
import useCategortyDetails from '../../hooks/useCategoryDetails';
import checkout from '../../utils/checkout';


const Cart = (props) => {
  const [cart, callComplete] = useCartDetails();
  const { testId } = props;
  const history = useHistory();
  const [categories, callCategoriesComplete] = useCategortyDetails();
  const checkoutCart = async () => {
    await checkout();
  };
  if (callComplete && callCategoriesComplete) {
    console.log(cart);
    return (
      <div className={styles.Cart} data-testId={testId}>
        <Nav />
        <div className={styles.tables}>
          <div className={styles.cartContent}>
            <h1>
              Your Shopping Cart (
              {cart.numberOfItems}
              {' '}
              items)
            </h1>
            <CartTable cart={cart} categories={categories} />
          </div>
          <div className={styles.Cards}>
            <div className={styles.totalCard}>
              <div className={styles.text}>
                <div>Total</div>
                <div>
                  Rs.
                  {' '}
                  {cart.totalValue}
                </div>
              </div>
              <button className={styles.button} onClick={() => { checkoutCart(); history.push('/products'); }} type="button">Checkout</button>
            </div>
            <div>
              <Link to="/products">
                <button className={styles.button} type="button">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.Cart}>
      <Nav count={cart.numberOfItems} />
      <h1>
        Your Shopping Cart (
        {cart.numberOfItems}
        {' '}
        items)
      </h1>
      <p>Loading...</p>
    </div>
  );
};
Cart.propTypes = {
  testId: PropTypes.string.isRequired,
};
export default Cart;
