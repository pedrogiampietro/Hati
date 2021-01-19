import React from 'react'
import './styles.css'
const ProductList = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://www.tibiawiki.com.br/images/2/2e/Plate_Armor.gif"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Nome do Produto</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded">-</button>
        </div>
      </div>
    </div>
  )
}

export default ProductList
