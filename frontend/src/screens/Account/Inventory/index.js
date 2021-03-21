import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInventory } from '../../../actions/InventoryActions';
import InventoryModal from '../../../components/InventoryModal';

import './styles.css';

const Inventory = ({ getInventory }) => {
  const [inventory, setInventory] = React.useState([]);
  const [currentAccordionIndex, setCurrentAccordionIndex] = React.useState(0);
  const [isInventoryModalOpen, setIsInventoryModalOpen] = React.useState(false);
  const [inventoryItemID, setInventoryItemID] = React.useState();
  const [filterStatus, setFilterStatus] = React.useState('all');

  React.useEffect(() => {
    if (filterStatus === '') return;
    getInventory({ inventoryStatus: filterStatus }).then(({ payload }) => {
      const newData = payload.data.data;
      setInventory(newData);
    });
  }, [getInventory, filterStatus]);

  let newInventory = [];
  let total = 1;

  for (let i = 0; i < inventory?.length; i++) {
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

  const arrInventory = inventory?.filter(
    (items) => items.itemid === inventoryItemID
  );

  const openAccordion = (inventory) => {
    setCurrentAccordionIndex(inventory.id);
    setInventoryItemID(inventory.itemid);
    setIsInventoryModalOpen(true);
  };

  function onValueChangeVocation(event) {
    const options = event.target.id;
    setFilterStatus(options);
  }

  return (
    <>
      <main id="main-inventory">
        <section id="inventory-window">
          <div>
            <ul
              className="nav nav-pills filters"
              role="tablist"
              onClick={onValueChangeVocation}
            >
              <li className="nav-item active">
                <Link to="#" className="nav-link" data-toggle="tab" id="all">
                  <i className="fal fa-globe mr-1" aria-hidden="true" />
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" data-toggle="tab" id="open">
                  <i className="fal fa-paper-plane mr-1" aria-hidden="true" />
                  Open
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  data-toggle="tab"
                  id="delivered"
                >
                  <i className="fal fa-check-circle mr-1" aria-hidden="true" />
                  Delivered
                </Link>
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
