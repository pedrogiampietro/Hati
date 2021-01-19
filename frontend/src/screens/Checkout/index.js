import Header from '../../components/Header'
import ProductList from '../../components/Product/List'
import './styles.css'

const Checkout = () => {
  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>

            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="CEP"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Cidade"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Logradouro"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Numero"
                />
              </div>
              <div className="col-5 pl-0">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Bairro"
                />
              </div>

              <div className="col-2 pl-0">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="UF"
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Numero do Cartao"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Validade"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="CVV"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <strong>Total</strong>
                <h3>R$ 30,00</h3>
              </div>
              <div className="col-12">
                <button className="btn btn-block btn-lg btn-primary">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="box col mb-4 box-sidebar">
              <h4>Minha Sacola (5)</h4>

              <div className="row products">
                {[1, 2, 3, 4, 5, 6, 7].map((p) => (
                  <ProductList />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
