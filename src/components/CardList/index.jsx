import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './index.module.css';
import Card from '../Card/index';

const CardList = (props) => {
  const { products, testId } = props;
  const cardList = products.map((value) => <Card id={value.id} name={value.name} price={value.price} quantity={value.quantity} link={value.imageLink} selectedQuantity={value.selectedQuantity} />);
  return (
    <div className={styles.CardList} data-testId={testId}>
      {cardList}
    </div>
  );
};
CardList.propTypes = {
  products: PropTypes.objectOf.isRequired,
  testId: PropTypes.string.isRequired,
};
export default CardList;
