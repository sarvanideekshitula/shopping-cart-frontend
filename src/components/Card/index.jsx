import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as styles from './index.module.css';
import addToCart from '../../utils/addToCart';
import removeFromCart from '../../utils/removeFromCart';

const Card = (props) => {
  const {
    id, name, price, quantity, link, selectedQuantity, testId,
  } = props;
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [plusDisabled, setPlusDisabled] = useState(false);
  const [modifiedQuantity, setModifiedQuantity] = useState(selectedQuantity || 0);
  function handleButtonDisable(input) {
    if (input >= quantity) {
      setPlusDisabled(true);
      setMinusDisabled(false);
    } else if (input <= 0) {
      setMinusDisabled(true);
      setPlusDisabled(false);
    } else {
      setMinusDisabled(false);
      setPlusDisabled(false);
    }
  }
  useEffect(() => {
    handleButtonDisable(modifiedQuantity);
  }, []);
  return (
    <div className={styles.card} data-testId={testId}>
      <div className={styles.image}>
        <img src={link} alt="artist" />
      </div>
      <div>
        <p>{name}</p>
        {' '}
        <p>
          MRP:
          {price}
        </p>
      </div>
      <div className={styles.buttons}>
        <button type="button" className={styles.button} onClick={() => { removeFromCart(id); setModifiedQuantity(modifiedQuantity - 1); handleButtonDisable(modifiedQuantity - 1); }} disabled={minusDisabled}>-</button>
        <p>{modifiedQuantity}</p>
        <button type="button" className={styles.button} onClick={() => { addToCart(id); setModifiedQuantity(modifiedQuantity + 1); handleButtonDisable(modifiedQuantity + 1); }} disabled={plusDisabled}>+</button>
      </div>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  selectedQuantity: PropTypes.number.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Card;
