import React from 'react'
import { connect } from 'react-redux'
import { getShopList } from '../../actions/ShopActions'
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai'
import Container from '../Layouts/Container'
import './styles.css'

const Shop = ({ getShopList }) => {
  const [shopList, setShopList] = React.useState([])

  React.useEffect(() => {
    getShopList()
      .then(({ payload }) => {
        const newData = payload.data.data
        setShopList(newData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [getShopList])

  console.log(shopList)
  return (
    <Container>
      <div className="sch-product-grid">
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item} className="col-md-3 col-sm-6">
              <div className="sch-product-item">
                {/* Start Product Images*/}
                <div className="sch-product-image">
                  {/* Start Product Effect*/}
                  <div className="sch-hovereffect">
                    <img
                      className="img-responsive"
                      src="https://www.tibiawiki.com.br/images/3/35/Thundermind_Raiment.gif"
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
                        <span>
                          <AiOutlineShoppingCart sie={24} />
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
                    <span className="sch-price-new">$15.00</span>
                    <span className="sch-price-old">$20.00</span>
                  </div>
                  {/* End Product Price*/}
                  {/* Start Product Title*/}
                  <h3 className="sch-title">
                    <span>Name Item</span>
                  </h3>
                  {/* End Product Title*/}
                  {/* Start Product Description*/}
                  <div className="sch-description">
                    Product fashion, hot trend and very cheap
                  </div>
                  {/* End Product Description*/}
                  {/* Start Product Rating*/}
                  <ul className="sch-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </ul>
                  {/* End Product Rating*/}
                  {/* Start Product Review*/}
                  <div className="sch-review">
                    <p>(0 review)</p>
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
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { getShopList })(Shop)
