import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styles from './index.module.css';


const Nav = (props) => {
  const { testId } = props;
  return (
    <div className={styles.nav} data-testId={testId}>
      <div className={styles.cart}>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};
Nav.propTypes = {
  testId: PropTypes.string.isRequired,
};
export default Nav;
