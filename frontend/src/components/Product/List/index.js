import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleCartProduct } from '../../../actions/ShopActions';
import './styles.css';

const ProductList = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src={product.shop_image} alt="" className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">{product.coins}</label>
          </h6>
          <small>
            <b>{product.shop_title}</b>
          </small>
          <p>{product.shop_description}</p>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(toggleCartProduct(product))}
            className="btn btn-secondary rounded"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
