import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makePagarmePurchasing } from '../../actions/PagarmeActions';
import { PurchaseCoinsModal } from '../../components/PurchaseCoinsModal';
import SimpleSlider from '../../components/SimpleSlider';
import MaskedInput from '../../components/TextMaskCustom';
import Error from '../../helpers/Error';
import { formatPrice } from '../../helpers/FormatPrice';
import Container from '../Layouts/Container';
import './styles.css';

const BuyCoins = () => {
  const { account } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const history = useHistory();

  // State variables, to store the values ​​of the inputs.
  const [costumerNome, setCostumerNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [numeroTel, setNumeroTel] = React.useState('');
  const [ruaNum, setRuaNum] = React.useState(0);
  const [bairro, setBairro] = React.useState('');
  const [uf, setUf] = React.useState('');

  const [numeroCartao, setNumeroCartao] = React.useState('');
  const [nomeCartao, setNomeCartao] = React.useState('');
  const [dataExpiracao, setDataExpiracao] = React.useState('');
  const [cvv, setCvv] = React.useState('');

  const [coins, setCoins] = React.useState(0);
  const [wallet, setWallet] = React.useState();
  const [error, setError] = React.useState('');
  const [isShoppingModalOpen, setIsShoppingModalOpen] = React.useState(false);

  //Create Costumer
  const costumer = {
    external_id: String(account?.id),
    name: costumerNome,
    type: 'individual',
    country: 'br',
    email: account?.email,
    documents: [
      {
        type: 'cpf',
        number: cpf,
      },
    ],
    phone_numbers: [`+55${numeroTel.replace(/[^\d]+/g, '')}`, '+5511888889999'],
    birthday: '1965-01-01',
  };

  //Criando adress para usar em billing e shipping
  const adress = {
    country: 'br',
    state: uf,
    city: cidade,
    neighborhood: bairro,
    street: cidade,
    street_number: ruaNum,
    zipcode: cep.replace('-', ''),
  };

  //Criando o shipping
  const shipping = {
    name: 'Shipping Reeves',
    fee: 1000,
    delivery_date: '2000-12-21',
    expedited: true,
    address: adress,
  };

  //Criando o billing
  const billing = {
    name: 'Billing Moss',
    address: adress,
  };

  // Criando um array com os itens no template do pagarme
  const finallyCart = [
    {
      id: String(account?.id),
      title: `${coins} Tibia coins`,
      unit_price: wallet,
      quantity: coins,
      tangible: true,
    },
  ];

  // Enviar os dados para o backend
  const handleMakePurchasing = (event) => {
    const response = {
      amount: wallet,
      card_number: numeroCartao,
      card_cvv: cvv,
      card_expiration_date: dataExpiracao,
      card_holder_name: nomeCartao,
      customer: costumer,
      billing: billing,
      shipping: shipping,
      items: finallyCart,
    };

    dispatch(makePagarmePurchasing(response))
      .then(() => {
        setTimeout(
          () => [
            history.push('/account/characters'),
            setIsShoppingModalOpen(false),
          ],
          1000
        );
      })
      .catch((err) => {
        const { data } = err.response.data;
        const newError = data.map((error) => error.parameter_name);
        setError(newError);
      });
  };

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
                    placeholder="Nome Completo"
                    className="form-control form-control-lg"
                    onChange={(e) => setCostumerNome(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="CPF"
                    className="form-control form-control-lg"
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>
                <div className="col-6 pl-0">
                  <MaskedInput
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                    className="form-control form-control-lg"
                    placeholder="CEP"
                    guide={false}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="form-control form-control-lg"
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>
                <div className="col-6 pl-0">
                  <MaskedInput
                    mask={[
                      '(',
                      /[1-9]/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    className="form-control form-control-lg"
                    placeholder="Número Telefone"
                    guide={false}
                    onChange={(e) => setNumeroTel(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5">
                  <input
                    type="number"
                    placeholder="Numero"
                    className="form-control form-control-lg"
                    onChange={(e) => setRuaNum(e.target.value)}
                  />
                </div>
                <div className="col-5 pl-0">
                  <input
                    type="text"
                    placeholder="Bairro"
                    className="form-control form-control-lg"
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div>
                <div className="col-2 pl-0">
                  <input
                    type="text"
                    placeholder="UF"
                    className="form-control form-control-lg"
                    onChange={(e) => setUf(e.target.value)}
                  />
                </div>
              </div>

              <span className="section-title">Dados de Pagamento</span>
              <div className="row mb-3">
                <div className="col-6">
                  <MaskedInput
                    mask={[
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    className="form-control form-control-lg"
                    placeholder="Número do Cartão"
                    guide={false}
                    onChange={(e) => setNumeroCartao(e.target.value)}
                  />
                </div>
                <div className="col-6 pl-0">
                  <input
                    type="text"
                    placeholder="Nome do titular"
                    className="form-control form-control-lg"
                    onChange={(e) => setNomeCartao(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <MaskedInput
                    mask={[/[0-1]/, /\d/, /\d/, /\d/]}
                    className="form-control form-control-lg"
                    placeholder="Validade"
                    guide={false}
                    onChange={(e) => setDataExpiracao(e.target.value)}
                  />
                </div>
                <div className="col-6 pl-0">
                  <MaskedInput
                    mask={[/\d/, /\d/, /\d/]}
                    className="form-control form-control-lg"
                    placeholder="CVV"
                    guide={false}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <Error error={error} />
                  <button
                    type="submit"
                    className="btn btn-block btn-lg btn-primary w-100"
                    onClick={() => handleMakePurchasing()}
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
                  <label className="control-label" htmlFor="sendtocharacter">
                    Nome do personagem para receber os Tibia Coins
                  </label>
                  <input
                    type="text"
                    id="sendtocharacter"
                    className="form-control"
                    disabled
                  />
                </div>
                <div className="form-group">
                  <h1>Quantity</h1>
                  <SimpleSlider
                    setWallet={setWallet}
                    coins={coins}
                    setCoins={setCoins}
                  />
                </div>
                <div className="alert alert-info">
                  <i className="fa fa-info-circle" /> Your purchase with us is
                  safe!
                </div>
              </div>
              {isShoppingModalOpen && <PurchaseCoinsModal />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuyCoins;
