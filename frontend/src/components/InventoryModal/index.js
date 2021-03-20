import React from 'react';
import { useDispatch } from 'react-redux';
import { playerGetCharacter } from '../../actions/PlayerActions';
import CloseModal from '../../assets/img/close.svg';
import { formatDate } from '../../helpers/DateTime';
import { RiSendPlaneLine } from 'react-icons/ri';
import './styles.css';

export function InventoryModal({ setIsInventoryModalOpen, arrInventory }) {
  const dispatch = useDispatch();

  const [name, setName] = React.useState('');
  const [data, setData] = React.useState([]);

  const getNameCharacter = () => {
    dispatch(playerGetCharacter(name)).then(({ payload }) => {
      const newData = payload.data.data.rows;
      setData(newData);
    });
  };

  return (
    <div className="overlay">
      <aside
        id="selected"
        data-load-url="~/assets/images/loading.gif"
        className="visible"
      >
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
                    style={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      color: 'white',
                    }}
                  >
                    {data[0]?.name}
                  </span>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Character Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={getNameCharacter}
                    >
                      <RiSendPlaneLine size={14} />
                    </button>
                  </div>
                </div>
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
}
