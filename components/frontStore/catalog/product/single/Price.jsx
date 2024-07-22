import { _ } from '@evershop/evershop/src/lib/locale/translate';
import PropTypes from 'prop-types';
import React from 'react';
import './Price.scss';

export function Price({ regular, special }) {
  return (
    <h4 className="product-single-price">
      {special.value === regular.value && (
        <div>
          <span className="sale-price">{regular.text}</span>
        </div>
      )}
      {special.value < regular.value && (
      <div className="grid grid-cols-1">
        <div>
          <span className="regular-price-has-discount-price">{_('Regular ${price}', { price: regular.text })}</span>
        </div>
        <div>
          <span className="sale-price-has-discount-price">{_('Sale ${price}', {price: special.text })}</span>{' '}
        </div>
      </div>
      )}
    </h4>
  );
}

Price.propTypes = {
  regular: PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  special: PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
