import React from 'react';
import { connect } from 'react-redux';
import { getInventory } from '../../../actions/InventoryActions';
import { InventoryModal } from '../../../components/InventoryModal';

import './styles.css';

const Inventory = ({ getInventory }) => {
  const [inventory, setInventory] = React.useState([]);
  const [currentAccordionIndex, setCurrentAccordionIndex] = React.useState(0);
  const [isInventoryModalOpen, setIsInventoryModalOpen] = React.useState(false);
  const [inventoryItemID, setInventoryItemID] = React.useState();

  React.useEffect(() => {
    getInventory().then(({ payload }) => {
      const newData = payload.data.data;
      setInventory(newData);
    });
  }, [getInventory]);

  let newInventory = [];
  let total = 1;

  for (let i = 0; i < inventory.length; i++) {
    if (
      i < inventory.length - 1 &&
      inventory[i].itemid === inventory[i + 1].itemid
    ) {
      total++;
    } else {
      newInventory.push({
        id: inventory[i].id,
        itemid: inventory[i].itemid,
        item_title: inventory[i].item_title,
        item_image: inventory[i].item_image,
        total: total,
      });
      total = 1;
    }
  }

  const arrInventory = inventory.filter(
    (items) => items.itemid === inventoryItemID
  );

  const openAccordion = (inventory) => {
    setCurrentAccordionIndex(inventory.id);
    setInventoryItemID(inventory.itemid);
    setIsInventoryModalOpen(true);
  };

  return (
    <>
      <main id="main-inventory">
        <section id="inventory-window">
          <div>
            <ul className="filters">
              <li className="todos active">
                <div>Todos</div>
                <span>{inventory.length}</span>
              </li>
              <li className="resgatados">
                <div>Resgatados</div>
                <span>0</span>
              </li>
              <li className="fechados">
                <div>Fechados</div>
                <span>0</span>
              </li>
              <li className="pendentes">
                <div>Pendentes</div>
                <span>0</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="inventory-items-container ">
              <ul className="inventory-items render resgatados fechados pendentes">
                {newInventory.map((inventory) => (
                  <li
                    id={inventory.id}
                    className={`Delivered ${
                      currentAccordionIndex === inventory.id ? 'selected' : ''
                    }`}
                    key={inventory.id}
                    onClick={() => openAccordion(inventory)}
                  >
                    <h2 className="text-white">{inventory.item_title}</h2>
                    <div className="gamebox">
                      <div className="card opened">
                        <div className="left" />
                        <div className="right" />
                        <div className="top" />
                        <div className="bottom" />
                        <div className="front" />
                        <div className="game">
                          <img
                            src={inventory.item_image}
                            className="game-cover"
                            alt="ItemImage"
                          />
                        </div>
                        <div className="back" />
                      </div>
                    </div>
                    <div className="current-quantity">{inventory.total}</div>
                  </li>
                ))}
              </ul>
            </div>
            {isInventoryModalOpen && (
              <InventoryModal
                setIsInventoryModalOpen={setIsInventoryModalOpen}
                arrInventory={arrInventory}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getInventory })(Inventory);
