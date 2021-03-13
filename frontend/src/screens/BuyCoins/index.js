import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../Layouts/Container';
import SimpleSlider from '../../components/SimpleSlider';
import { formatPrice } from '../../helpers/FormatPrice';

import './styles.css';

const BuyCoins = () => {
  const { account } = useSelector((state) => state.account);
  const Account = account?.[0]?.account;

  const [wallet, setWallet] = React.useState();

  return (
    <Container>
      <div className="h-100">
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              <span className="section-title">Dados Pessoais</span>
              <div className="row mb-3">
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className="form-control form-control-lg"
                  />
                </div>
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

            <div className="col-sm-4">
              <h1>Tibia Coins</h1>
              <ul className="list-unstyled">
                <li>Modelo: TibiaCoin</li>
                <li>Disponibilidade: Em estoque</li>
              </ul>
              <span id="code_product_id" value={195} />
              <ul className="list-unstyled">
                <li>
                  <h2 id="code_price">{formatPrice(wallet)}</h2>
                </li>
                <li>
                  <hr />
                </li>
              </ul>
              <div id="product">
                <hr />
                <h3>Opções disponíveis</h3>
                <div className="form-group required">
                  <label className="control-label" htmlFor="input-option431">
                    Nome do personagem para receber os Tibia Coins{' '}
                  </label>
                  <input
                    type="text"
                    name="option[431]"
                    defaultValue
                    placeholder="Nome do personagem para receber os Tibia Coins                    "
                    id="input-option431"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <h1>Quantity</h1>
                  <SimpleSlider setWallet={setWallet} />
                </div>
                <div className="alert alert-info">
                  <i className="fa fa-info-circle" /> Your purchase with us is
                  safe!
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
