import React from 'react';
import { useDispatch } from 'react-redux';
import { sendItemToCharacter } from '../../actions/InventoryActions';
import CloseModal from '../../assets/img/close.svg';
import { formatDate } from '../../helpers/DateTime';
import { RiSendPlaneLine } from 'react-icons/ri';

import './styles.css';

const InventoryModal = ({ setIsInventoryModalOpen, arrInventory }) => {
  const dispatch = useDispatch();

  const [name, setName] = React.useState('');
  const [inventoryItem, setInventoryItem] = React.useState(0);
  const [error, setError] = React.useState('');

  const getNameCharacter = async () => {
    if (!name) return;
    dispatch(sendItemToCharacter({ name, inventoryItem }))
      .then(() => {})
      .catch((err) => {
        const { data } = err.response;
        setError(data.message);
      });
  };

  const sendToCharacter = async (character) => {
    setInventoryItem(character);
  };

  return (
    <div className="overlay">
      <aside id="selected" className="visible">
        <div className="container before-mobile">
          <div className="menu">
            <div className="bar" />
            <div className="bar" />
          </div>

          <h2>{arrInventory[0].item_title}</h2>
          <div style={{ display: 'none' }}>
            <p>7</p>
            <p>0</p>
          </div>
          <ul className="keys-list">
            {arrInventory.map((items) => (
              <li key={items.id} className="selected">
                <div className="info">
                  <div>
                    <p
                      style={{
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        color: 'white',
                      }}
                    >
                      pedido #{items.id}
                    </p>
                    <p>{formatDate(items.createdAt)}</p>
                  </div>

                  <span
                    className="badge badge-primary"
                    style={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      fontSize: '16px',
                      color: 'white',
                    }}
                  >
                    {items.sended_to}
                    {items.id === inventoryItem.id ? name : null}
                  </span>
                </div>

                {items.sended_to ? (
                  <div className="alert alert-danger mb-0" role="alert">
                    Enviado para {items.sended_to} no dia{' '}
                    {formatDate(items.updatedAt)}
                  </div>
                ) : (
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Character Name"
                    onChange={(e) => setName(e.target.value)}
                    onClick={() => sendToCharacter(items)}
                  />
                )}

                <span
                  style={{
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  {error}
                </span>

                {items.sended_to ? null : (
                  <button
                    className="btn-primary form-control"
                    onClick={getNameCharacter}
                  >
                    Send Item
                    <RiSendPlaneLine className="ml-1" size={14} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <button
        className="btn btn-outline-primary"
        onClick={() => setIsInventoryModalOpen(false)}
      >
        <img src={CloseModal} alt="Fechar modal" />
      </button>
    </div>
  );
};

export default InventoryModal;
