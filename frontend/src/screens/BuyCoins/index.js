import React from 'react';
import Container from '../Layouts/Container';
import './styles.css';

const BuyCoins = () => {
  return (
    <Container>
      <div className="h-100">
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              <span className="section-title">Dados Pessoais</span>
              <div className="row mb-3">
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="CEP"
                    className="form-control form-control-lg"

                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="form-control form-control-lg"

                  />
                </div>
                <div className="col-6 pl-0">
                  <input
                    type="text"
                    placeholder="Logradouro"
                    className="form-control form-control-lg"

                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5">
                  <input
                    type="number"
                    placeholder="Numero"
                    className="form-control form-control-lg"

                  />
                </div>
                <div className="col-5 pl-0">
                  <input
                    type="text"
                    placeholder="Bairro"
                    className="form-control form-control-lg"

                  />
                </div>
                <div className="col-2 pl-0">
                  <input
                    type="text"
                    placeholder="UF"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <span className="section-title">Dados de Pagamento</span>
              <div className="row mb-3">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Número do Cartão"
                    className="form-control form-control-lg"

                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Nome do titular"
                    className="form-control form-control-lg"

                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Validade"
                    className="form-control form-control-lg"

                  />
                </div>
                <div className="col-6 pl-0">
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-control form-control-lg"

                  />
                </div>
              </div>
              {/* <div className="row mb-3">
              <div className="col-6 pl-0" >
                <input
                  type="text"
                  placeholder="CPF/CNPJ do titular"
                  className="form-control form-control-lg"
                />
              </div>
            </div> */}
              <div className="row mt-4">
                <div className="col-12 mb-4 d-flex justify-content-between align-items-center total">
                  <b>Total:</b>
                  {/* <h3>R$ {total.toFixed(2)}</h3> */}
                </div>
                <div className="col-12">
                  <button
                    type="button"
                
                    className="btn btn-block btn-lg btn-primary w-100"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="box col mb-4 box-sidebar">
                {/* <h4>Minha Sacola ({cart.length}) </h4> */}

                <div className="row products">
                  {/* {cart.map((p) => (
                    <ProductList product={p} />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuyCoins;
