import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getShopList, toggleCartProduct } from '../../actions/ShopActions';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineEye } from 'react-icons/ai';
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';
import Container from '../Layouts/Container';
import './styles.css';

const Shop = ({ getShopList, toggleCartProduct }) => {
  const { cart } = useSelector((state) => state.shop);
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

  const added = cart.findIndex((p) => p.id === shopList.id) !== -1;

  console.log('added', added);
  console.log('shopList', shopList);
  console.log('cart', cart);

  return (
    <Container>
      <div className="sch-product-grid">
        <div className="row">
          {shopList.map((product) => (
            <div key={product.id} className="col-md-2 col-sm-6">
              <div className="sch-product-item">
                {/* Start Product Images*/}
                <div className="sch-product-image">
                  {/* Start Product Effect*/}
                  <div className="sch-hovereffect">
                    <img
                      className="img-responsive"
                      src={product.shop_image}
                      alt="Item"
                    />
                    <div className="sch-overlay">
                      <h2 />
                      <p className="set1">
                        <span>
                          <AiOutlineSearch size={24} className="mr-4" />
                        </span>
                        <span>
                          <AiOutlineHeart size={24} />
                        </span>
                      </p>
                      <hr />
                      <hr />
                      <p className="set2">
                        <span>
                          <AiOutlineEye size={24} className="mr-4" />
                        </span>

                        <span onClick={() => toggleCartProduct(product)}>
                          {added ? (
                            <MdRemoveShoppingCart size={24} />
                          ) : (
                            <MdAddShoppingCart size={24} />
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* End Product Effect*/}
                  {/* Start Product New Label*/}
                  <span className="sch-product-new-label">
                    <span>New</span>
                  </span>
                  {/* End Product New Label*/}
                </div>
                {/* End Product Images*/}
                {/* Start Product Content*/}
                <div className="sch-product-content">
                  {/* Start Product Price*/}
                  <div className="sch-price">
                    <span className="sch-price-new">{product.coins}</span>
                    {/* <span className="sch-price-old">20/span> */}
                  </div>
                  {/* End Product Price*/}
                  {/* Start Product Title*/}
                  <h3 className="sch-title">
                    <span>{product.shop_title}</span>
                  </h3>
                  {/* End Product Title*/}
                  {/* Start Product Description*/}
                  <div className="sch-description">
                    {product.shop_description}
                  </div>
                  {/* End Product Description*/}

                  {/* Start Product Review*/}
                  <div className="sch-quantity">
                    <p>({product.shop_amount} quantity)</p>
                  </div>
                  {/* End Product Review*/}
                </div>
                {/* End Product Content*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getShopList, toggleCartProduct })(
  Shop
);
