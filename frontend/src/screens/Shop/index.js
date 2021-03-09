import React from 'react';
import { connect } from 'react-redux';
import { getShopList, toggleCartProduct } from '../../actions/ShopActions';
import ProductCard from '../../components/Product/Card';

import Container from '../Layouts/Container';
import './styles.css';

const Shop = ({ getShopList }) => {
  const [shopList, setShopList] = React.useState([]);

  React.useEffect(() => {
    getShopList()
      .then(({ payload }) => {
        const newData = payload.data.data.rows;
        setShopList(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getShopList]);

  return (
    <Container>
      <div className="sch-product-grid">
        <div className="row">
          <ProductCard shopList={shopList} />
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { getShopList, toggleCartProduct })(
  Shop
);
