import React from 'react';
import Dock from 'react-dock';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { buyNowCart } from '../../actions/ShopActions';
import ProductList from '../../components/Product/List';
import './styles.css';

const SidebarBag = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cart } = useSelector((state) => state.shop);
  const { account } = useSelector((state) => state.account);
  const [opened, setOpened] = React.useState(false);
  const totalCart = cart.reduce((total, product) => {
    return total + product.coins;
  }, 0);

  React.useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

  const handleBuyNow = (event) => {
    event.preventDefault();

    dispatch(buyNowCart({ totalCoins: totalCart, closedCart: cart }))
      .then(() => {
        history.push('/account/characters');
        setOpened(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>My Bag ({cart.length})</h5>

        <div className="row products">
          {cart.map((p) => (
            <ProductList key={p.id} product={p} />
          ))}
        </div>

        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">{totalCart} Coins</h3>
          </div>
          <button
            className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center"
            onClick={handleBuyNow}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default SidebarBag;
