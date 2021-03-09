import React from 'react';
import { useSelector } from 'react-redux';
import Dock from 'react-dock';
import ProductList from '../../components/Product/List';
import './styles.css';

const SidebarBag = ({}) => {
  const { cart } = useSelector((state) => state.shop);
  const [opened, setOpened] = React.useState(false);
  const total = cart.reduce((total, product) => {
    return total + product.coins;
  }, 0);

  React.useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

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
            <h3 className="d-inline-block">{total} Coins</h3>
          </div>
          <button className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center">
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default SidebarBag;
